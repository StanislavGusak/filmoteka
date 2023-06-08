import { Link, useLocation } from "react-router-dom";
import styles from './MoviesBar.module.css';
import SearchByYear from "../SearchByYear/SearchByYear";

const MoviesBar = () => {
    const location = useLocation();

    return (
        <div className={styles.moviebar__wrapper}>
            <ul className={styles.moviebar__list}>
                <li className={styles.moviebar__list__item}>
                    <Link to={`/movie/actors/`} state={{ from: location }}>
                        Actors
                    </Link>
                </li>
                <li className={styles.moviebar__list__item}>
                    <Link to={`/movie/top-rated/`} state={{ from: location }}>
                        Top
                    </Link>
                </li>
                <li className={styles.moviebar__list__item}>
                    <Link to={`/movie/expected-movies/`} state={{ from: location }}>
                        Expected Movies
                    </Link>
                </li>
            </ul>
            <div>
                <SearchByYear />
            </div>
        </div>
    )
};

export default MoviesBar;