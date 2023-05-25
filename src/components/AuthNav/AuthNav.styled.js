import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 20px;
`;