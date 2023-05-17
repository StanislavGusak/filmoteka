import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TbBellPlusFilled, TbBellMinusFilled } from 'react-icons/tb';
import apiTheMovieDB from '../../services/kinoApi';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import {
    BackDrop,
    BellListWrapper,
    BellWrapper,
    CardsLoader,
    BellList,
    BellListItem,
    BellImg,
    BellTitle,
    BellDateRelis,
} from './BellNotification.styled';

const BellNotification = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showList, setShowList] = useState(false);
    const [viewed, setViewed] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const { selectedLanguage } = useContext(LanguageContext);
    const location = useLocation();

    useEffect(() => {
        if (showList) {
            apiTheMovieDB
                .fetchNewMoviesNotification(page, selectedLanguage.iso_639_1)
                .then(movies => {
                    setMovies(prevMovies => [...prevMovies, ...movies]);
                    if (movies.length === 0) {
                        setShowButton(false);
                        if (page === 1) {
                            setMovies([]);
                            toast.error("Sorry, we couldn't find any movies for that year.");
                        } else {
                            toast.error("That's all the movies we could find for that year.");
                        }
                    } else {
                        setShowButton(true);
                    }
                })
                .catch(error => {
                    setError(error);
                })
                .finally(() => setLoading(false));
        }
    }, [page, selectedLanguage, showList]);

    if (error) {
        return <p>{error.message}</p>;
    }

    const handleClick = () => {
        setShowList(!showList);
        setViewed(!viewed);
    };

    const closeListNavigate = () => {
        setShowList(false);
        setViewed(!viewed);
    };

    const hendleIncrement = () => {
        setPage(prevPage => prevPage + 1);
    };

    const clickBackdrop = e => {
        if (e.currentTarget === e.target) {
            setShowList(false);
            setViewed(!viewed);
        }
    };

    return (
        <>
            <BellWrapper>
                {viewed ? (
                    <TbBellMinusFilled
                        onClick={handleClick}
                        size={30}
                        color={viewed ? 'gray' : 'green'}
                    />
                ) : (
                    <TbBellPlusFilled
                        onClick={handleClick}
                        size={30}
                        color={viewed ? 'gray' : 'green'}
                    />
                )}
            </BellWrapper>
            {showList && (
                <BackDrop onClick={clickBackdrop}>
                    <BellListWrapper>
                        <BellList>
                            {loading ? (
                                <CardsLoader size={50} />
                            ) : (
                                movies.map(
                                    ({ poster_path, title, id, release_date }, index) => (
                                        <Link
                                            key={`${id}${index}`}
                                            to={`/movies/${id}`}
                                            state={{ from: location }}
                                            onClick={closeListNavigate}
                                        >
                                            <BellListItem key={id}>
                                                <BellImg
                                                    src={
                                                        poster_path
                                                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                                            : 'https://dummyimage.com/100x150/fff/aaa'
                                                    }
                                                    alt={title}
                                                    width={50}
                                                />
                                                <BellTitle>
                                                    {title ? title : 'Movie without a title'}
                                                </BellTitle>
                                                <BellDateRelis>{release_date}</BellDateRelis>
                                            </BellListItem>
                                        </Link>
                                    )
                                )
                            )}
                        </BellList>
                        {showButton && <ButtonLoadMore hendleIncrement={hendleIncrement} />}
                    </BellListWrapper>
                </BackDrop>
            )}
        </>
    );
};

export default BellNotification;