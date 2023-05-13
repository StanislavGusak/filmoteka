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

export const CastList = styled.ul`
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const CastItem = styled.li`
  border: 1px solid var(--border-color);
  max-width: 220px;
  padding: 10px;
  background: var(--background-header);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
`;

export const CastName = styled.p`
  color: var(--color);
`;