import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media screen and (max-width: 410px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const WelcomeMessage = styled.p`
  font-size: 14px;
  color: var(--border-color);
  @media screen and (max-width: 410px) {
    font-size: 10px;
  }
`;

export const Email = styled.p`
  font-size: 14px;
  opacity: 0.6;
  color: var(--border-color);
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color);
  font-size: 18px;
  cursor: pointer;
  transition: color var(--transition);
  &:hover {
    text-decoration: underline;
    color: var(--border-color);
  }
`;