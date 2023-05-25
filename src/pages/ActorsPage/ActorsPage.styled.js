import styled from 'styled-components';
import DebounceInput from 'react-debounce-input';
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

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
  margin-bottom: 20px;
  @media screen and (max-width: 705px) {
    margin-top: 230px;
  }
  @media screen and (max-width: 380px) {
    margin-top: 250px;
  }
`;

export const ActorList = styled.ul`
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ActorListItem = styled.li`
  max-width: 220px;
  border: 1px solid gold;
  padding: 10px;
  background: var(--background-header);
`;

export const ActorsName = styled.p`
  max-width: 200px;
  color: var(--color);
  font-size: 16px;
  font-weight: bold;
`;

export const ActorsDepartment = styled.p`
  color: var(--color);
  font-size: 14px;
`;

export const ActorsRating = styled.p`
  color: green;
`;

export const StyleDebounceInput = styled(DebounceInput)`
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  width: 200px;
  height: 50px;
  background: var(--background-header);
  color: var(--color);
  padding-left: 10px;
  
  &:focus {
    outline: none;
  }
`;