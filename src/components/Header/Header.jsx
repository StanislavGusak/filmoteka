import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Navigation from '../Navigation/Navigation';
import { FaReact } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.navigation__wrapper}>
                    <ThemeSwitcher />
                    <Navigation />
                    <div className={styles.logo}>
                        <Link to={'/'}>
                            <FaReact className={styles.logo__react} />
                            <span>Filmoteka on React</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;