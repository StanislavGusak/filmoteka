import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaReact } from 'react-icons/fa';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import AuthNav from '../AuthNav/AuthNav';
import authSelector from '../../redux/auth/auth-selector';
import UserBar from '../UserBar/UserBar';
import BellNotification from '../BellNotification/BellNotification';
import LanguageSelection from '../LanguageSelection/LanguageSelection';
import css from './Header.module.css';

function Header() {
    const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

    return (
        <header className={css.header}>
            <div className={css.navigationWrapper}>
                <div className={css.WrapperLangAndTheme}>
                    <ThemeSwitcher />
                    <LanguageSelection />
                </div>
                <div className={css.navContainer}>
                    <Navigation />
                    {isLoggedIn ? <UserBar /> : <AuthNav />}
                </div>
                {isLoggedIn && <BellNotification />}
            </div>
        </header>
    );
};

export default Header;