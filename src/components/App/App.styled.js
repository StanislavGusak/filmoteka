import styled from "styled-components";
import ScrollToTop from 'react-scroll-to-top';

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: rgb(80, 76, 74);
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
`;

export const StyledScrollToTop = styled(ScrollToTop)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-movies-item);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  svg {
    fill: var(--color);
  }
  &:hover {
    background: var(--background-body);
  }
`;