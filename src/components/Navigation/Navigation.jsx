import {
    NavWrapper,
    NavigationWrapper,
    NavigationLink,
} from './Navigation.styled';

function Navigation() {
    return (
        <NavWrapper>
            <NavigationWrapper>
                <NavigationLink to="/">Home</NavigationLink>
                <NavigationLink to="/movies">Movies</NavigationLink>
                <NavigationLink to="/library">Library</NavigationLink>
            </NavigationWrapper>
        </NavWrapper>
    );
}

export default Navigation;