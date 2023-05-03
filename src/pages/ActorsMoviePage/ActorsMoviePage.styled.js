import styled from 'styled-components';

export const BtnBackWrapper = styled.div`
  margin-top: 190px;
  margin-bottom: 30px;
  @media screen and (max-width: 705px) {
    margin-top: 230px;
  }
  @media screen and (max-width: 380px) {
    margin-top: 250px;
  }
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
  margin-bottom: 30px;
  text-transform: uppercase;
  color: var(--color);
  transition: color var(--transition);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;