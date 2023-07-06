import styled from 'styled-components';
import DebounceInput from 'react-debounce-input';

export const SearchWrapper = styled.div`
  text-align: center;
`;

export const Search = styled.div`
  display: inline-flex;
  position: relative;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const ActorList = styled.ul`
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ActorListItem = styled.li`
  max-width: 220px;
  border: 1px solid gold;
  border-radius: 5px;
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
  border-radius: 5px;
  background-color: var(--white);
  border: 1px solid grey;
  font-size: 16px;
  outline: none;
  padding: 5px;
  color: var(--black);
  width: 200px;
  &:focus {
    outline: none;
  }
`;