import { useState, useEffect, Suspense } from "react";
import { useLocation, useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GiReturnArrow } from 'react-icons/gi';
import Container from "../../components/Container/Container";
import YouTube from 'react-youtube';
import apiTheMovieDB from "../../services/kinoApi";
import BackDown from "../../components/BackDown/BackDown";
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
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [isFavourite, setIsFavourite] = useState(false);
    const [trailerId, setTrailerId] = useState(null);
    const [urlModal, setUrlModal] = useState(false);

    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/movie/actors/');
    };

    const handleFetchTrailer = () => {
        apiTheMovieDB
            .fetchTrailerMovies(movieId)
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
    }

    useEffect(() => {
        const favouritesFromStorage = localStorage.getItem('favourites');
        if (favouritesFromStorage) {
            setFavourites(JSON.parse(favouritesFromStorage));
        }
    }, []);

    useEffect(() => {
        setIsFavourite(favourites.some(fav => fav.id === movie.id));
    }, [favourites, movie.id]);

    const toggleFavourites = () => {
        const movieToAdd = {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average.toFixed(1),
            release_date: movie.release_date.slice(0, 4),
        };
        if (isFavourite) {
            const newFavourites = favourites.filter(fav => fav.id !== movie.id);
            setFavourites(newFavourites);
            localStorage.setItem('favourites', JSON.stringify(newFavourites));
            setIsFavourite(false);
            toast.success('Film added to the library');
        } else {
            const newFavourites = [...favourites, movieToAdd];
            setFavourites(newFavourites);
            localStorage.setItem('favourites', JSON.stringify(newFavourites));
            setIsFavourite(true);
            toast.success('Film added to the library');
        }
    }

    useEffect(() => {
        apiTheMovieDB.fetchMovieDetails(movieId)
            .then(data => {
                setMovie(data);
            })
            .catch('error');
    }, [movieId]);

    useEffect(() => {
        window.addEventListener('keydown', clickKeyDown);

        return () => {
            window.addEventListener('keydown', clickKeyDown);
        }
    }, []);

    const closeModal = () => {
        setUrlModal(false);
        setTrailerId(null);
        document.removeEventListener('keydown', clickKeyDown);
    };

    const clickBackDrop = e => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    };

    const clickKeyDown = e => {
        if (e.code === 'Escape') {
            closeModal();
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
                                src={movie.backdrop_path
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
                                    <li className={styles.review__list__item}>
                                        <Link
                                            to="cast"
                                            state={location.state}
                                            className={styles.cast}
                                        >
                                            Cast
                                        </Link>
                                    </li>
                                    <li className={styles.review__list__item}>
                                        <Link
                                            to="review"
                                            state={location.state}
                                            className={styles.review}
                                        >
                                            Rewiew
                                        </Link>
                                    </li>
                                    <li className={styles.review__list__item}>
                                        <Link to={'/library'} onClick={toggleFavourites}>
                                            <AddMoviesBtn type="button">
                                                {isFavourite
                                                    ? 'Remove from library'
                                                    : 'Add movie to library'}
                                            </AddMoviesBtn>
                                        </Link>
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
                                    <VideoBackdrop onClick={clickBackDrop}>
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
                    </Container>
                </section>
            )}
        </>
    )
};

export default MovieDetailsPage;