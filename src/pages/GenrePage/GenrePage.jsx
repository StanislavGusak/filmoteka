import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import apiTheMovieDB from "../../services/kinoApi";
import MoviesList from "../../components/MoviesList/MoviesList";
import styles from './GenrePage.module.css';

const GenrePage = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const fetchMovies = useCallback(async () => {
        try {
            const data = await apiTheMovieDB.fetchByGenre(id, currentPage);
            setMovies(prevMovies => [...prevMovies, ...data.results]);
        } catch (error) {
            toast.error('Failed to fetch movies.');
        }
    }, [id, currentPage]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await apiTheMovieDB.fetchByGenre(id, 1);
            setMovies(data.results);
            setTotalPage(data.total_pages);
        };
        fetchMovies();
    }, [id]);

    useEffect(() => {
        if(currentPage > 1) {
            fetchMovies();
        }
    }, [fetchMovies, currentPage]);

    return (
        <div className={styles.genre__list__container}>
            <h2 className={styles.genre__title}>Movies by genre</h2>
            <InfiniteScroll
                dataLength={movies.length}
                next={() => setCurrentPage(currentPage + 1)}
                hasMore={movies.length < totalPage}
                loader={<h4>Loading...</h4>}
            >
                <MoviesList movies={movies} />
            </InfiniteScroll>
        </div>
    );
};

export default GenrePage;