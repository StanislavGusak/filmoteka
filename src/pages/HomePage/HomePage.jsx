import { useState, useEffect, useCallback, useContext } from "react";
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';
import Container from '../../components/Container/Container';
import MoviesList from "../../components/MoviesList/MoviesList";
import GanreList from "../../components/GenreList/GenreList";
import ExpectedMoviesList from '../../components/ExpectedMoviesList/ExpectedMoviesList';
import { LanguageContext } from "../../components/LanguageContext/LanguageContext";
import apiTheMovieDB from "../../services/kinoApi";
import styles from './HomePage.module.css';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [genres, setGenres] = useState([]);
    const [mounted, setMounted] = useState(false);
    const { selectedLanguage } = useContext(LanguageContext);

    const fetchMovies = useCallback(
        page => {
            setIsFetching(true);

            apiTheMovieDB
                .fetchTrending(page, selectedLanguage.iso_639_1)
                .then(newMovies => {
                    setIsFetching(false);
                    if (newMovies.length === 0) {
                        toast.error("sorry, that's all the movies we could find");
                    }

                    setMovies(prevMovies => [...prevMovies, ...newMovies]);
                    setCurrentPage(page);
                })
                .catch(error => {
                    setIsFetching(false);
                });
        },
        [selectedLanguage.iso_639_1]
    );

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (mounted && movies.length === 0) {
            fetchMovies(currentPage, selectedLanguage.iso_639_1);
        }
    }, [
        currentPage,
        fetchMovies,
        movies.length,
        mounted,
        selectedLanguage.iso_639_1,
    ]);

    useEffect(() => {
        apiTheMovieDB
            .fetchAllGenres(selectedLanguage.iso_639_1)
            .then(data => {
                setGenres(data);
            })
            .catch('error');
    }, [selectedLanguage.iso_639_1]);

    return (
        <Container>
            <ExpectedMoviesList />
            <GanreList genres={genres} />
            <section className={styles.trandingMovies}>
                <InfiniteScroll
                    dataLength={movies.length}
                    next={() => fetchMovies(currentPage + 1)}
                    hasMore={!isFetching}
                    loader={<p>Loading...</p>}
                >
                    <MoviesList movies={movies} />
                </InfiniteScroll>
            </section>
        </Container>
    );
};

export default HomePage;
