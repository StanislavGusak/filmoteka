import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

`;

export const WelcomeMessage = styled.p`
  font-size: 14px;
  color: var(--border-color);
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--color);
  border-radius: 4px;
  color: var(--color);
  cursor: pointer;
  font-size: 14px;
  padding: 5px 20px;
  transition: var(--transition);
  &:hover {
    background-color: var(--color);
    color: var(--hover-btn);
  }
`;