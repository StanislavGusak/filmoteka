import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper } from 'swiper/react';
import { toast } from 'react-toastify';
import { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper';
import Container from '../Container/Container';
import apiTheMovieDB from '../../services/kinoApi';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import 'swiper/css';
import 'swiper/css/navigation'
import {
    CardsLoader,
    ExpectedWrapper,
    NavigationButton,
    ExpectedInfoWrapper,
    ExpectedInfoContainer,
    StyledSwiperSlide,
    SlideFlexWrapper,
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
    const { selectedLanguage } = useContext(LanguageContext);

    useEffect(() => {
        apiTheMovieDB
            .fetchExpectedMovies(selectedLanguage.iso_639_1)
            .then(newMovies => {
                setMovies(newMovies);
            })
            .catch(error => {
                setError(error);
                toast.error('Error');
            })
            .finally(setLoading(false));
    }, [selectedLanguage]);

    if (error) {
        return <p>{error.message}</p>
    }
    return (
        <>
            {loading ? (
                <CardsLoader size={50} color="aqua" />
            ) : (
                <>
                    <ExpectedWrapper>
                        <Swiper
                            modules={[Navigation, Scrollbar, Pagination, Autoplay]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            scrollbar={{ draggable: true }}
                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                420: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                520: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1370: {
                                    slidesPerView: 5,
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
                                    const ratingClassName = `rating-${ratingColor}`;
                                    return (
                                        <StyledSwiperSlide key={id}>
                                            <SlideFlexWrapper>
                                                <ImgExpectedWrapper>
                                                    <Link
                                                        to={`/movies/${id}`}
                                                        state={{ from: location }}
                                                    >
                                                        <ExpectedImg
                                                            src={
                                                                poster_path
                                                                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                                                    : 'https://via.placeholder.com/300x420'
                                                            }
                                                            alt={title}
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
                                            </SlideFlexWrapper>
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
        </>
    );
};

export default ExpectedMoviesList;