import styled, { css } from 'styled-components';

export const LibrarryTitle = styled.h1`
  margin-top: 150px;
  margin-bottom: 30px;
  font-size: 24px;
  color: var(--color);
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

export const FavoritesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 100px;
  margin-top: 50px;
  overflow: hidden;
  padding: 25px;
`;

export const FavoritesItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  max-width: 320px;
  padding: 10px;
  background: var(--background-movies-item);
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
  margin-bottom: 10px;
`;

export const RatingStarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const ExpextedRating = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 5px;
  font-weight: bold;
  font-size: 8px;

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

export const MoviesYear = styled.p`
  color: red;
  font-weight: bold;
  font-size: 12px;
  margin-left: auto;
`;