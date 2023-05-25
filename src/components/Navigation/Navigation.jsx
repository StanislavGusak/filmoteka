import {
    NavWrapper,
    NavigationWrapper,
    NavigationLink,
} from './Navigation.styled';
import { VscClose, VscMenu } from 'react-icons/vsc';
import { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [nav, setNav] = useState(false);
 
    return (
        <NavWrapper>
            <NavigationWrapper>
                <NavigationLink to="/">Home</NavigationLink>
                <NavigationLink to="/movies">Movies</NavigationLink>
                <NavigationLink to="/library">Library</NavigationLink>
            </NavigationWrapper>
            <div onClick={() => setNav(!nav)} className={styles.mobile__btn}>
                {nav ? <VscClose size={25} /> : <VscMenu size={25} />}
            </div>
        </NavWrapper>
    );
};

export default Navigation;