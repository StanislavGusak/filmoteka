import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

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

export const StyleFiGlobe = styled(FiGlobe)`
  color: var(--color);
  cursor: pointer;
`;

export const LanguageTitle = styled.p`
  color: var(--color);
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
`;

export const LanguageItem = styled.li`
  width: 100px;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid var(--border-color);
  background-image: var(--background-body);
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
`;

export const LanguageName = styled.p`
  color: var(--color);
  max-width: 70px;
  text-align: center;
`;