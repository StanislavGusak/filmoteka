import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './GenreList.module.css';

function GenreList({ genres }) {
    const location = useLocation();

    return (
        <ul className={css.ganreList}>
            {genres.map(({ id, name }) => (
                <Link to={`genre/${id}`} state={{ from: location }} key={id}>
                    <li className={css.ganreListItem}>
                        <p>{name || 'Unknown'}</p>
                    </li>
                </Link>
            ))}
        </ul>
    );
}
export default GenreList;

GenreList.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};