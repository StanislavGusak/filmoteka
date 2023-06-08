import { useState } from 'react';
import { VscClose, VscMenu } from 'react-icons/vsc';
import {NavWrapper, NavigationLink} from './Navigation.styled';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [nav, setNav] = useState(false);

    const clickBackdrop = e => {
        if (e.currentTarget === e.target) {
            setNav(false);
        };
    };

    const handleMenu = () => {
        setNav(!nav);
    }
 
    return (
        <NavWrapper>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <NavigationLink onClick={clickBackdrop} to="/">Home</NavigationLink>
                <NavigationLink onClick={clickBackdrop} to="/movies">Movies</NavigationLink>
                <NavigationLink onClick={clickBackdrop} to="/library">Favourites</NavigationLink>
            </ul>
            <div onClick={handleMenu} className={styles.mobile__btn}>
                {nav ? <VscClose size={25} /> : <VscMenu size={25} />}
            </div>
        </NavWrapper>
    );
};

export default Navigation;