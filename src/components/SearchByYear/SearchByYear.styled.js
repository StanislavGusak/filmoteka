import styled from 'styled-components';
import Select from 'react-select';
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

export const SelectWrapper = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const SelectedYear = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SelectLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
  color: var(--color);
`;

export const StyleSelect = styled(Select)`
  width: 200px;
`;

export const SearchText = styled.p`
  color: var(--color);
  max-width: 290px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;