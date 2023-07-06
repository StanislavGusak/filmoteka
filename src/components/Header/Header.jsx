import { useSelector } from 'react-redux';
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
                    {isLoggedIn && <BellNotification />}
                </div>
                <div className={css.navContainer}>
                    <Navigation />
                    {isLoggedIn ? <UserBar /> : <AuthNav />}
                </div>
            </div>
        </header>
    );
};

export default Header;