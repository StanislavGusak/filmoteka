import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import authSelector from '../../redux/auth/auth-selector';
import authOperation from '../../redux/auth/auth-operation';
import { Wrapper, WelcomeMessage, LogoutButton } from './UserBar.styled';

const UserBar = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelector.getName);

    const handleLogOut = () => {
        Notiflix.Confirm.show(
            'Confirmation',
            'Are you sure you want to log out?',
            'Yes',
            'No',
            () => {
                dispatch(authOperation.logOut());
            },
            () => {}
        );
    };
    return (
        <Wrapper>
            <WelcomeMessage>Welcome, {name}!</WelcomeMessage>
            <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
        </Wrapper>
    );
};

export default UserBar;