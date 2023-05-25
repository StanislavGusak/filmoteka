import { useState } from 'react';
import { VscClose, VscMenu } from 'react-icons/vsc';
import BackDrop from '../BackDrop/BackDrop';
import styles from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, SetHideOrShow] = useState({});

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
        if (isOpen) {
            SetHideOrShow(() => {
                return [];
            })
        } else {
            SetHideOrShow(() => {
                return { display: 'flex' };
            })
        }
    };

    return (
        <div className={styles.burger__menu}>
            {isOpen ? <button onClick={toggleMenu} className={styles.menu__btn}>{<VscClose />}</button>
                    : <button onClick={toggleMenu} className={styles.menu__btn}>{<VscMenu />}</button>}

            {isOpen ? <BackDrop handleMenu={toggleMenu} /> : null}
            <div className={styles.nav__vision} style={hideOrShow}></div>
            <ul className={styles.burger__menu__list}>
                <li className={styles.burger__menu__item}>
                    <NavLink to={'/'} className={`(${styles.isActive}) => ? ${styles.active} : ${styles.burger__menu__item}`}>Home</NavLink>
                </li>
                <li className={styles.burger__menu__item}>
                    <NavLink to={'/movies'} className={`(${styles.isActive}) => ? ${styles.active} : ${styles.burger__menu__item}`}>Movies</NavLink>
                </li>
                <li className={styles.burger__menu__item}>
                    <NavLink to={'/library'} className={`(${styles.isActive}) => ? ${styles.active} : ${styles.burger__menu__item}`}>Library</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default BurgerMenu;