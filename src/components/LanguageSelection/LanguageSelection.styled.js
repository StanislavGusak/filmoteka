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

export const LanguageList = styled.ul`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: scroll;
  max-width: 150px;
  max-height: 400px;
  z-index: 30;
  background-image: var(--background-header);
  border-radius: 10px;
  padding: 15px;
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