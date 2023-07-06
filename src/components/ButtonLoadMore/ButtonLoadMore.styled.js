import styled from 'styled-components';

export const BtnLoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--color);
  font-size: 18px;
  width: 200px;
  height: 50px;
  background-color: transparent;
  color: var(--color);
  margin: auto;
  transition: var(--transition);
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: var(--color);
    color: var(--hover-btn);
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 50px;
  }
`;