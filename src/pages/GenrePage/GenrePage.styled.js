import styled from 'styled-components';

export const GenreListMoviesContainer = styled.div`
  margin-top: 190px;
  @media screen and (max-width: 705px) {
    margin-top: 230px;
  }
  @media screen and (max-width: 380px) {
    margin-top: 250px;
  }
`;

export const GenreTitle = styled.h2`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);
  text-transform: uppercase;
`;