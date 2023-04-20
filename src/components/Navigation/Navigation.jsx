import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={styles.nav__wrapper}>
            <nav className={styles.navigation}>
                <NavLink className={styles.navigation__link} to='/'>
                    Home
                </NavLink>
                <NavLink className={styles.navigation__link} to='/movies'>
                    Movies
                </NavLink>
                <NavLink className={styles.navigation__link} to='/library'>
                    Library
                </NavLink>
                <NavLink className={styles.navigation__link} to='/registration'>
                    Registration
                </NavLink>
            </nav>
        </div>
    );
};

export default Navigation;