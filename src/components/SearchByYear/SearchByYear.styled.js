import styled from 'styled-components';
import Select from 'react-select';

export const SelectWrapper = styled.div`
  max-width: 280px;
  margin: 20px 0;
`;

export const StyleSelect = styled(Select)`
  width: 208px;
  box-sizing: border-box;
  background-color: var(--white);
  border: 1px solid grey;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  color: var(--black);
`;

export const SearchText = styled.p`
  color: var(--color);
  font-size: 16px;
`;