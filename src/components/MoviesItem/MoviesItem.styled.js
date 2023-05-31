import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 5px;
`;

export const MoviesImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardTitle = styled.h3`
  max-width: 300px;
  color: var(--color);
  font-size: 14px;
  margin-bottom: 0;
  margin-top: auto;
`;

export const RatingStarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GoldStar = styled.span`
  font-size: 10px;
  color: gold;
`;

export const GrayStar = styled.span`
  font-size: 10px;
  color: gray;
`;

export const RatingText = styled.p`
  color: rgb(36, 35, 35);
  font-size: 10px;
`;

export const RatingNumber = styled.span`
  font-size: 8px;
`;

export const MoviesYear = styled.p`
  color: red;
  font-weight: bold;
  font-size: 12px;
  margin-left: auto;
`;

export const red = css`
  background: #f85032;
  background: -webkit-linear-gradient(to right, #e73827, #f85032);
  background: linear-gradient(to right, #e73827, #f85032);
`;

export const yellow = css`
  background: #f7971e;
  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);
  background: linear-gradient(to right, #ffd200, #f7971e);
  color: rgb(36, 35, 35);
`;

export const green = css`
  background: #000000;
  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);
  background: linear-gradient(to right, #0f9b0f, #000000);
  color: #fff;
`;

export const RatingBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 10px;
  heigth: 10px;
  padding: 5px;
  font-weight: bold;
  margin-left: 10px;
  &.rating-red {
    ${red}
  }
  &.rating-yellow {
    ${yellow}
  }
  &.rating-green {
    ${green}
  }
`;