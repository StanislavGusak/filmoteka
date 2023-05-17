import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';
import { FaReact } from 'react-icons/fa';

export const LoaderWraper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--background-body);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainLoader = styled(FaReact)`
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

export const StyledScrollToTop = styled(ScrollToTop)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-movies-item);
  svg {
    fill: var(--color);
  }
  &:hover {
    background: var(--background-body);
  }
`;