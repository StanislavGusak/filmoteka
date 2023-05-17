import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { AiFillFastForward, AiFillFastBackward } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';

export const CardsLoader = styled(FaReact)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  fill: var(--color);
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

export const ExpectedWrapper = styled.div`
  overflow: hidden;
  margin-top: 190px;
  padding: 5px;
  height: 100%;
  @media screen and (max-width: 705px) {
    margin-top: 230px;
  }
  @media screen and (max-width: 380px) {
    margin-top: 250px;
  }
`;

export const NavigationButton = styled.div`
  &.swiper-button-next,
  &.swiper-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    border: 3px solid var(--border-color);
    background: var(--background-header);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  &.swiper-button-next {
    right: 10px;
    --swiper-navigation-size: 0;
  }
  &.swiper-button-prev {
    left: 10px;
    --swiper-navigation-size: 0;
  }
  &.swiper-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  height: 390px;
  background: var(--background-movies-item);
  padding: 5px;
  font-size: 14px;
  color: var(--color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  box-sizing: border-box;
`;

export const SlideFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 390px;
`;

export const ImgExpectedWrapper = styled.div`
  overflow: hidden;
`;

export const ExpectedImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.1);
    filter: saturate(165%);
  }
`;

export const ExpectedInfoContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const ExpectedTitle = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  white-space: nowrap;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const ExpectedInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAiFillFastForward = styled(AiFillFastForward)`
  color: var(--color);
`;
export const StyledAiFillFastBackward = styled(AiFillFastBackward)`
  color: var(--color);
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

export const ExpextedYear = styled.p`
  color: red;
  font-weight: bold;
`;