import { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import apiTheMovieDB from '../../services/kinoApi';
import Container from '../Container/Container';
import MoviesList from '../MoviesList/MoviesList';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import styles from './SearchByYear.module.css';

const SearchByYear = () => {
    const [selectedYear, setSelectedYear] = useState(0);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (selectedYear !== 0) {
            const fetchMovies = async () => {
                setLoading(true);
                try {
                    const newMovies = await apiTheMovieDB.fetchByYear(page, selectedYear);
                    if (newMovies.length === 0) {
                        setShowButton(false);
                        if (page === 1) {
                            setMovies([]);
                            toast.error("Sorry, we couldn't find any movies for that year.");
                        } else {
                            toast.error("That's all the movies we could find for that year.");
                        }
                    } else {
                        setShowButton(true);
                        setMovies(prevMovies => [...prevMovies, ...newMovies])
                    }
                } catch (error) {
                    setError(error)
                } finally {
                    setLoading(false)
                }
            };
            fetchMovies();
        }
    }, [page, selectedYear]);

    if (error) {
        return <p>{error.message}</p>
    }

    const yearOptions = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 50; year--) {
        yearOptions.push(year);
    }

    const hendleIncrement = () => {
        setPage(page + 1);
    };

    return (
        <>
            <Container>
                <div className={styles.selected__wrapper}>
                    <div className={styles.select__year}>
                        <label className={styles.select__label} htmlFor="year-select">
                            Select a year:
                        </label>
                        <div className={styles.select__wrapper}>
                            <Select
                                className={styles.select}
                                classNamePrefix="react-select"
                                name="year-select"
                                id="year-select"
                                value={{ value: selectedYear, label: selectedYear }}
                                onChange={selectedOption =>
                                    setSelectedYear(selectedOption.value)
                                }
                                options={yearOptions.map(year => ({
                                    value: year,
                                    label: year,
                                }))}
                                placeholder="Select a year"
                                menuPlacement="auto"
                            />
                            <div className={styles.select__icon}></div>
                        </div>
                    </div>
                    {movies.length > 0 ? (
                        <MoviesList movies={movies} />
                    ) : loading ? (
                        <p className={styles.loading__movies__list}>Loading...</p>
                    ) : (
                        <p className={styles.search__text}>
                            Please select a year to see movies.
                        </p>
                    )}
                    {showButton && <ButtonLoadMore hendleIncrement={hendleIncrement} />}
                </div>
            </Container>
        </>
    )
};

export default SearchByYear;