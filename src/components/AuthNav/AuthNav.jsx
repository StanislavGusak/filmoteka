import { NavigationLink, AuthNavWrapper } from './AuthNav.styled';

const AuthNav = () => {
    return (
        <AuthNavWrapper>
            <NavigationLink to="/registration">
                Registration
            </NavigationLink>
            <NavigationLink to="/login">
                LogIn
            </NavigationLink>
        </AuthNavWrapper>
    );
};

export default AuthNav;