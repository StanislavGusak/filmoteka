import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesItem from '../MoviesItem/MoviesItem';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul className={styles.movies__list}>
            {movies.map(
                ({ id, poster_path, title, vote_average, release_date }, index) => (
                    <li key={`${id}-${index}`} className={styles.movies__item}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            <MoviesItem
                                key={id}
                                id={id}
                                poster_path={poster_path}
                                title={title}
                                vote_average={vote_average}
                                release_date={release_date}
                            />
                        </Link>
                    </li>
                )
            )}
        </ul>
    )
};

export default MoviesList;

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            poster_path: PropTypes.string,
            title: PropTypes.string,
            vote_average: PropTypes.number,
            release_date: PropTypes.string
        })
    ).isRequired,
};