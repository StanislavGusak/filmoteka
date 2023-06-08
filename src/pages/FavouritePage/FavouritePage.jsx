import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../components/Container/Container';
import BackDown from '../../components/BackDown/BackDown';
import {
    LibrarryTitle,
    FavoritesList,
    FavoritesItem,
    ImgWrapper,
    MoviesImg,
    CardTitle,
    RatingStarsContainer,
    MoviesYear,
    ExpextedRating,
} from './FavouritePage.styled';

const LibraryPage = () => {
    const [favoritesList, setFavoritesList] = useState([]);
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        setFavoritesList(favorites || []);
    }, []);

    return (
        <>
            <Container>
                <LibrarryTitle>Favourites</LibrarryTitle>
                <Link to={backLink}>
                    <BackDown />
                </Link>
                <FavoritesList>
                    {favoritesList.map(
                        ({ id, poster_path, title, vote_average, release_date }) => {
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
                                <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                                    <FavoritesItem key={id}>
                                        <ImgWrapper>
                                            <MoviesImg
                                                src={
                                                    poster_path
                                                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                                        : 'https://via.placeholder.com/300x420'
                                                }
                                                alt={title}
                                                width={300}
                                            />
                                        </ImgWrapper>
                                        <CardTitle>
                                            {title ? title : 'Movie without a title'}
                                        </CardTitle>
                                        <RatingStarsContainer>
                                            <ExpextedRating className={ratingClassName}>
                                                {typeof vote_average === 'number'
                                                    ? vote_average.toFixed(1)
                                                    : 'N/A'}
                                            </ExpextedRating>
                                            <MoviesYear>
                                                {release_date ? release_date : 'N/A'}
                                            </MoviesYear>
                                        </RatingStarsContainer>
                                    </FavoritesItem>
                                </Link>
                            )
                        }
                    )}
                </FavoritesList>
            </Container>
        </>
    );
};

export default LibraryPage;