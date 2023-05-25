import { useState, useEffect, Suspense, useContext } from "react";
import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GiReturnArrow } from 'react-icons/gi';
import { animateScroll as scroll } from 'react-scroll';
import YouTube from 'react-youtube';
import apiTheMovieDB from "../../services/kinoApi";
import Container from "../../components/Container/Container";
import BackDown from "../../components/BackDown/BackDown";
import { LanguageContext } from "../../components/LanguageContext/LanguageContext";
import authSelector from '../../redux/auth/auth-selector';
import posterImg from '../../images/poster.jpg';
import styles from './MovieDetailsPage.module.css';
import {
    DetailsWrapper,
    ColumnInfo,
    PosterMovie,
    BtnBackDetailsWrapper,
    InfoTitle,
    ScoreDetails,
    OverviewTitle,
    Overview,
    GenreListDetails,
    ColumnImg,
    DetalisImg,
    ReviewList,
    VideoBackdrop,
    AddMoviesBtn,
    AuthBtnText
} from './MovieDetailsPage.styled';

const MovieDetalis = () => {
    const [movie, setMovie] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [trailerId, setTrailerId] = useState(null);
    const [urlModal, setUrlModal] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { selectedLanguage } = useContext(LanguageContext);

    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

    function handleFetchTrailer() {
        apiTheMovieDB
            .fetchTrailerMovies(movieId, selectedLanguage.iso_639_1)
            .then(videos => {
                const trailer = videos.find(video => video.type === 'Trailer');
                if (trailer) {
                    setTrailerId(trailer.key);
                    setUrlModal(true);
                    document.body.style.overflow = 'hidden';
                } else {
                    setUrlModal(false);
                    toast.error('No trailer available for this movie.');
                }
            });
    };

    useEffect(() => {
        const favoritesFromStorage = localStorage.getItem('favorites');
        if (favoritesFromStorage) {
            setFavorites(JSON.parse(favoritesFromStorage));
        }
    }, []);

    useEffect(() => {
        setIsFavorite(favorites.some(fav => fav.id === movie.id));
    }, [favorites, movie.id]);

    function toggleFavorites() {
        const movieToAdd = {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            release_date: movie.release_date.slice(0, 4),
        };
        if (isFavorite) {
            const newFavorites = favorites.filter(fav => fav.id !== movie.id);
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(false);
            toast.success('Film removed from the library');
        } else {
            const newFavorites = [...favorites, movieToAdd];
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(true);
            toast.success('Film added to the library');
        }
    }

    useEffect(() => {
        apiTheMovieDB
            .fetchMovieDetails(movieId, selectedLanguage.iso_639_1)
            .then(data => {
                setMovie(data);
            })
            .catch('error');
    }, [movieId, selectedLanguage]);

    useEffect(() => {
        window.addEventListener('keydown', clickKeyDown);

        return () => {
            window.removeEventListener('keydown', clickKeyDown);
        };
    });

    function closeModal() {
        setUrlModal(false);
        setTrailerId(null);
        document.body.style.overflow = 'auto';
    }

    const clickBackdrop = e => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    };

    const clickKeyDown = e => {
        if (e.code === 'Escape') {
            closeModal();
        }
    };

    const henndleCastAndReviewSmooth = () => {
        if (!isClicked) {
            scroll.scrollToBottom({
                duration: 2000,
                smooth: 'easeInOutQuad',
                offset: 0.2,
            });
            setIsClicked(true);
        }
    };

    return (
        <>
            {movie && (
                <section className={styles.detalis}>
                    <Container>
                        <BtnBackDetailsWrapper>
                            <Link to={backLink}>
                                <BackDown />
                            </Link>
                        </BtnBackDetailsWrapper>
                        <DetailsWrapper>
                            <PosterMovie
                                src={
                                    movie.backdrop_path
                                        ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                        : posterImg
                                }
                                alt={movie.title}
                            />
                            <ColumnInfo>
                                <InfoTitle>
                                    {movie.title ? movie.title : 'Movie without a title'}
                                </InfoTitle>
                                <ScoreDetails>
                                    User score: {(movie.vote_average * 10).toFixed(0)}%
                                </ScoreDetails>
                                <OverviewTitle>Overview</OverviewTitle>
                                <Overview>
                                    {movie.overview ? movie.overview : 'Movie without a overview'}
                                </Overview>
                                <GenreListDetails>
                                    {movie.genres &&
                                        movie.genres.map(({ name, id }) => (
                                            <li key={id}>{name}</li>
                                        ))}
                                </GenreListDetails>
                                <ReviewList>
                                    <li className={styles.reviewiLstItem}>
                                        <Link
                                            to="cast"
                                            state={location.state}
                                            className={styles.cast}
                                            onClick={henndleCastAndReviewSmooth}
                                        >
                                            Cast
                                        </Link>
                                    </li>

                                    <li className={styles.reviewiLstItem}>
                                        {isLoggedIn && (
                                            <Link
                                                to="review"
                                                state={location.state}
                                                className={styles.review}
                                                onClick={henndleCastAndReviewSmooth}
                                            >
                                                Rewiew
                                            </Link>
                                        )}
                                    </li>
                                    <li className={styles.reviewiLstItem}>
                                        <Link to={'/library'} onClick={toggleFavorites}>
                                            <AddMoviesBtn disabled={!isLoggedIn} type="button">
                                                {isFavorite
                                                    ? 'Remove from library'
                                                    : 'Add movie to library'}
                                            </AddMoviesBtn>
                                        </Link>
                                        {!isLoggedIn && (
                                            <AuthBtnText>
                                                Register or log in to be able to add a movie to your
                                                library
                                            </AuthBtnText>
                                        )}
                                    </li>
                                </ReviewList>
                            </ColumnInfo>
                            <ColumnImg>
                                <DetalisImg
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                            : posterImg
                                    }
                                    alt={movie.title ? movie.title : 'Movie without a title'}
                                    width={300}
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleFetchTrailer}
                                />
                                {urlModal && (
                                    <VideoBackdrop onClick={clickBackdrop}>
                                        <GiReturnArrow
                                            className={styles.icon__back__modal}
                                            onClick={closeModal}
                                        />

                                        <YouTube
                                            className={styles.video__modal}
                                            videoId={trailerId}
                                            opts={{
                                                width: '100%',
                                                height: '100%',
                                                playerVars: {
                                                    autoplay: 1,
                                                    controls: 0,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                                origin: 'http://localhost:3000',
                                            }}
                                        />
                                    </VideoBackdrop>
                                )}
                            </ColumnImg>
                        </DetailsWrapper>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </Container>
                </section>
            )}
        </>
    );
}

export default MovieDetalis;
