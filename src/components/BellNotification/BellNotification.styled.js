import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  width: 100vw;
  top: 17px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

export const BellWrapper = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

export const BellListWrapper = styled.div`
  background-image: var(--background-body);
  overflow-y: auto;
  max-width: 700px;
  padding: 20px;
  position: absolute;
  top: 81px;
  z-index: 10;
  max-height: 470px;
  box-sizing: border-box;
  margin: auto;
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
