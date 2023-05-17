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

export const BackDrop = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

export const BellWrapper = styled.div`
  cursor: pointer;
`;

export const BellListWrapper = styled.div`
  background-image: var(--background-body);
  overflow-y: auto;
  max-width: 700px;
  padding: 20px;
  position: absolute;
  top: 110px;
  z-index: 20;
  max-height: 500px;
  box-sizing: border-box;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 706px) {
    top: 150px;
  }
  @media screen and (max-width: 458px) {
    top: 170px;
  }
`;

export const BellList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const BellListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  border: 1px solid var(--border-color);
  background-image: var(--background-body);
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
`;

export const BellImg = styled.img`
  margin-right: 10px;
`;

export const BellTitle = styled.h3`
  color: var(--color);
`;

export const BellDateRelis = styled.p`
  font-size: 10px;
  color: var(--border-color);
  font-weight: bold;
  margin-left: auto;
`;