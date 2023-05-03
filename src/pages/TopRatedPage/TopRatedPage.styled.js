import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const CardsLoader = styled(FaReact)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(--color);
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const TitleTopRating = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: var(--color);
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const LoadingTopRating = styled.p`
  width: 200px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  color: var(--color);
  font-size: 21px;
`;

export const BtnWrapperTop = styled.p`
  margin-top: 190px;
  @media screen and (max-width: 705px) {
    margin-top: 230px;
  }
  @media screen and (max-width: 380px) {
    margin-top: 250px;
  }
`;