import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoaderBlack from '../../images/loader-black.svg';
import LoaderWhite from '../../images/loader-white.svg';
import styles from './Loader.module.css';

const Loader = ({ theme }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'dark': setLoaderIcon(LoaderBlack); break;
            case 'light': setLoaderIcon(LoaderWhite); break;
            default: setLoaderIcon(LoaderBlack);
        }
    }, [theme]);

    return (
        <img
            className={styles.loader}
            src={loaderIcon}
            alt='Loading'
        />
    )
}

Loader.propTypes = {
    theme: PropTypes.string,
}

export default Loader;