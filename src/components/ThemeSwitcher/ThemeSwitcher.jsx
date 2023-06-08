import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "../../redux/themeSlise";
import { SwitcherWrapper } from "./ThemeSwitcher.styled";
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
    const [isSelected, setIsSelected] = useState(true);
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const theme = isDarkMode ? 'dark' : 'light';

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
        setIsSelected(!isSelected);
    }

    return (
        <div className={styles.switcher}>
            <FaMoon
                onClick={handleThemeToggle}
                className={!isDarkMode ? styles.color__dark : styles.color__light}
            />
            <FaSun
                onClick={handleThemeToggle}
                className={isDarkMode ? styles.color__dark : styles.color__light}
            />
            <span
                className={isDarkMode ? styles.dark : styles.light}
            />
        </div>
    );
};

export default ThemeSwitcher;