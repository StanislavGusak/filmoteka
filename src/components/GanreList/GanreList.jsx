import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './GanreList.module.css';

const GanreList = ({genres}) => {
    const location = useLocation();

    return (
        <ul className={styles.ganre__list}>
            {genres.map(({id, name}) => (
                <Link to={`genre/${id}`} state={{from: location}} key={id}>
                    <li className={styles.ganre__list__item}>
                        <p>{name}</p>
                    </li>
                </Link>
            ))}
        </ul>
    )
};

export default GanreList;

GanreList.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
};