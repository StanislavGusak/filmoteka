import styled from 'styled-components';
import playIcon from '../../images/youtube.png';

export const PosterMovie = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  object-fit: cover;
  top: 84px;
  right: -50%;
  z-index: -1;
  transform: translate(-50%, 0);
  opacity: 0.1;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: url(${PosterMovie}) no-repeat center center;
  bacground-position: center;
  margin-top: 20px;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const ColumnInfo = styled.div`
  position: relative;
  max-width: 50%;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const BtnBackDetailsWrapper = styled.div`
  margin-top: 120px;
`;

export const InfoTitle = styled.h1`
  max-width: 90%;
  font-size: 56px;
  color: var(--color);
  text-shadow: 0 0 1px black;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
`;

export const ScoreDetails = styled.p`
  font-size: 20px;
  color: var(--border-color);
  margin-bottom: 10px;
`;

export const OverviewTitle = styled.h2`
  font-size: 36px;
  color: var(--color);
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  color: var(--color);
  margin-bottom: 10px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const GenreListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--border-color);
`;

export const ColumnImg = styled.div`
  position: relative;
  cursor: pointer;
  max-width: 50%;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  &:hover::before {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    transition: all 0.4s;
  }

  &:hover::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: url(${playIcon}) no-repeat center center;
    background-size: contain;
    transition: all 0.4s;
  }
`;

export const DetalisImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ReviewList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Cast = styled.div`
  font-size: 30px;
  color: gold;
  transition: color 0.4s;
  &:hover {
    color: var(--hover-color-text);
  }
`;

export const Review = styled.div`
  font-size: 30px;
  color: gold;
  transition: color 0.4s;
  &:hover {
    color: orange;
  }
`;

export const VideoBackdrop = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AuthBtnText = styled.p`
  font-size: 10px;
  color: var(--color);
  margin-top: 5px;
`;