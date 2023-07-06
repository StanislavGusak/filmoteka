import styled from 'styled-components';
import { FiGlobe } from 'react-icons/fi';

export const StyleFiGlobe = styled(FiGlobe)`
  color: var(--color);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    color: var(--border-color);
  }
`;

export const LanguageTitle = styled.p`
  color: var(--dark);
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
`;

export const LanguageItem = styled.li`
  width: 100px;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--dark);
  background-color: var(--dark);
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  color: var(--light);
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: var(--light);
    color: var(--dark);
  }
`;

export const LanguageName = styled.p`
  max-width: 70px;
  text-align: center;
`;