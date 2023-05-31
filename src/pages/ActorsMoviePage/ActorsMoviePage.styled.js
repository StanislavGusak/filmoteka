import styled from 'styled-components';

export const BtnBackWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 30px;
`;

export const ActorsMoviesTitle = styled.h2`
  margin-bottom: 30px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color);
  font-size: 21px;
  display: flex;
  justify-content: center;
`;

export const ActorsMoreInfo = styled.h3`
  text-align: center;
  text-transform: uppercase;
  color: var(--color);
  transition: color var(--transition);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: var(--border-color);
  }
`;