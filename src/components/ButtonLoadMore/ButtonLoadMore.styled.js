import styled from 'styled-components';

export const BtnLoadMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background: var(--background-movies-item);
  margin-left: auto;
  margin-right: auto;
  border: none;
  text-transform: uppercase;
  color: var(--color);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background: var(--background-body);
  }
`;