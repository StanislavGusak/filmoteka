import { useEffect, useState, useCallback, useContext } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import apiTheMovieDB from "../../services/kinoApi";
import MoviesList from "../../components/MoviesList/MoviesList";
import { LanguageContext } from "../../components/LanguageContext/LanguageContext";
import BackDown from "../../components/BackDown/BackDown";
import { GenreListMoviesContainer, GenreTitle } from './GenrePage.styled';

const GenrePage = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { selectedLanguage } = useContext(LanguageContext);
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    const fetchMovies = useCallback(async () => {
        try {
            const data = await apiTheMovieDB.fetchByGenre(
                id,
                currentPage,
                selectedLanguage.iso_639_1
            );
            setMovies(prevMovies => [...prevMovies, ...data.results]);
        } catch (error) {
            toast.error('Failed to fetch movies.');
        }
    }, [id, currentPage, selectedLanguage.iso_639_1]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await apiTheMovieDB.fetchByGenre(
                id,
                1,
                selectedLanguage.iso_639_1
            );
            setMovies(data.results);
            setTotalPage(data.total_pages);
        };
        fetchMovies();
    }, [id, selectedLanguage.iso_639_1]);

    useEffect(() => {
        if (currentPage > 1) {
            fetchMovies();
        }
    }, [fetchMovies, currentPage]);

    return (
        <GenreListMoviesContainer>
            <GenreTitle>Movies by genre</GenreTitle>
            <Link to={backLink}>
                <BackDown />
            </Link>
            <InfiniteScroll
                dataLength={movies.length}
                next={() => setCurrentPage(currentPage + 1)}
                hasMore={movies.length < totalPage}
                loader={<h4>Loading...</h4>}
            >
                <MoviesList movies={movies} />
            </InfiniteScroll>
        </GenreListMoviesContainer>
    );
};

export default GenrePage;