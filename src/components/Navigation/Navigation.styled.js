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
`;

export const NavigationLink = styled(NavLink)`
  color: var(--color);
  text-transform: uppercase;
  transition: color var(--transition);
  position: relative;
  &:hover {
    color: var(--hover-color-text);
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