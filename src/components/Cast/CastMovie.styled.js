import styled from 'styled-components';

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