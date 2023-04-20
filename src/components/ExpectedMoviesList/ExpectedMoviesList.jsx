import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper } from 'swiper/react';
import { toast } from 'react-toastify';
import { Navigation, Scrollbar } from 'swiper';
import Container from '../Container/Container';
import apiTheMovieDB from '../../services/kinoApi';
import 'swiper/css';
import 'swiper/css/navigation'
import {
    ExpectedWrapper,
    NavigationButton,
    ExpectedInfoWrapper,
    ExpectedInfoContainer,
    StyledSwiperSlide,
    ImgExpectedWrapper,
    ExpectedImg,
    ExpectedTitle,
    ExpextedRating,
    ExpextedYear,
    StyledAiFillFastForward,
    StyledAiFillFastBackward,
} from './ExpectedMoviesList.styled';

const ExpectedMoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        apiTheMovieDB
            .fetchExpectedMovies()
            .then(newMovies => {
                setMovies(newMovies);
            })
            .catch(error => {
                setError(error);
                toast.error('Error');
            })
            .finally(setLoading(false));
    }, []);

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <>
            <Container>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <ExpectedWrapper>
                            <Swiper
                                modules={[Navigation, Scrollbar]}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                scrollbar={{ draggable: true }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    480: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                    1200: {
                                        slidesPerView: 6,
                                        spaceBetween: 10,
                                    },
                                }}
                            >
                                {movies.map(
                                    ({ poster_path, title, id, vote_average, release_date }) => {
                                        const getRatingColor = () => {
                                            if (vote_average <= 4) {
                                                return 'red';
                                            } else if (vote_average < 7) {
                                                return 'yellow';
                                            } else {
                                                return 'green';
                                            }
                                        };
                                        const ratingColor = getRatingColor();
                                        const ratingClassName = `rating - ${ratingColor}`;
                                        return (
                                            <StyledSwiperSlide key={id}>
                                                <ImgExpectedWrapper>
                                                    <Link to={`/movies/${id}`} state={{ from: location }}>
                                                        <ExpectedImg
                                                            src={
                                                                poster_path
                                                                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                                                    : 'https://via.placeholder.com/300x400'
                                                            }
                                                            alt={title}
                                                            width={177}
                                                        />
                                                    </Link>
                                                </ImgExpectedWrapper>
                                                <ExpectedInfoContainer>
                                                    <ExpectedTitle>
                                                        {title ? title : 'Movie without a title'}
                                                    </ExpectedTitle>
                                                    <ExpectedInfoWrapper>
                                                        <ExpextedRating className={ratingClassName}>
                                                            {vote_average ? vote_average.toFixed(1) : 'N/A'}
                                                        </ExpextedRating>
                                                        <ExpextedYear>
                                                            {release_date.slice(0, 4)}
                                                        </ExpextedYear>
                                                    </ExpectedInfoWrapper>
                                                </ExpectedInfoContainer>
                                            </StyledSwiperSlide>
                                        )
                                    }
                                )}
                                <NavigationButton className="swiper-button-next">
                                    <StyledAiFillFastForward />
                                </NavigationButton>
                                <NavigationButton className="swiper-button-prev">
                                    <StyledAiFillFastBackward />
                                </NavigationButton>
                            </Swiper>
                        </ExpectedWrapper>
                    </>
                )}
            </Container>
        </>
    )
};

export default ExpectedMoviesList;