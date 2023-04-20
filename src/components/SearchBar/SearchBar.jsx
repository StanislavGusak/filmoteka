import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleQueryChange = e => {
        setQuery(e.currentTarget.value.toLowerCase().trim());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!query) {
            toast.error('Please, enter your name movie!');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input__search}
                name="query"
                value={query}
                type="text"
                autoComplete="off"
                placeholder="Enter the movie name"
                onChange={handleQueryChange}
            />
            <button type="submit" className={styles.serch__btn}>
                Search...
            </button>
        </form>
    );
};

export default SearchBar;

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}