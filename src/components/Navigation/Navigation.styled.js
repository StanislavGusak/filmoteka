import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationWrapper = styled.nav`
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    transition: left 1s;
    width: 100%;
    height: 100vh;
    background: var(--background-header);
  }
`;

export const NavigationLink = styled(NavLink)`
  color: var(--color);
  text-transform: uppercase;
  transition: color var(--transition);
  position: relative;

  &::after {
    display: block;
    content: "";
    width: 80%;
    height: 3px;
    position: absolute;
    left: 50%;
    transition: all .5s ease-in-out;
    transform: translate(-50%) scale3d(0,1,1);
    bottom: -10px;
    background: var(--color);
    border-radius: 5px;
}

&:hover::after {
  transform: translate(-50%) scale3d(1,1,1);
}

  &.active {
    color: var(--color);
    cursor: default;
  }
  &.active::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 3px;
    background-color: var(--color);
    border-radius: 5px;
  }
`;