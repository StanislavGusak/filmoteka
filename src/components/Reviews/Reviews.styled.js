import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
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

export const StyleFaTrashAlt = styled(FaTrashAlt)`
  margin-bottom: 10px;
  margin-left: auto;
  cursor: pointer;
`;

export const ReviewAndCommentWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const ReviewList = styled.ul`
  width: 50%;
  margin-bottom: 90px;
`;

export const ReviewListItem = styled.li``;

export const Author = styled.p`
  margin-bottom: 20px;
  font-size: 30px;
  color: var(--border-color);
  @media screen and (max-width: 660px) {
    font-size: 20px;
    @media screen and (max-width: 555px) {
      font-size: 15px;
    }
    @media screen and (max-width: 490px) {
      font-size: 11px;
    }
  }
`;

export const Content = styled.p`
  font-size: 20px;
  color: var(--color);
  margin-bottom: 30px;
  text-align: justify;
  @media screen and (max-width: 660px) {
    font-size: 20px;
    @media screen and (max-width: 555px) {
      font-size: 15px;
    }
    @media screen and (max-width: 490px) {
      font-size: 11px;
    }
    @media screen and (max-width: 370px) {
      font-size: 7px;
    }
  }
`;

export const InfoDiscription = styled.p`
  max-width: 300px;
  color: var(--color);
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const CommentFormList = styled.ul`
  background-image: var(--background-header);
  padding: 15px;
  border-radius: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 170px;
`;

export const CommentFormItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: var(--background-body);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 10px;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const CommentAuthorName = styled.p`
  font-size: 30px;
  color: var(--color);
  @media screen and (max-width: 660px) {
    font-size: 20px;
    @media screen and (max-width: 555px) {
      font-size: 15px;
    }
    @media screen and (max-width: 490px) {
      font-size: 11px;
    }
  }
`;

export const SpanAuthor = styled.span`
  display: flex;
  font-size: 30px;
  color: var(--border-color);
  @media screen and (max-width: 660px) {
    font-size: 20px;
  }
  @media screen and (max-width: 555px) {
    font-size: 15px;
  }
  @media screen and (max-width: 490px) {
    font-size: 11px;
  }
`;

export const CommentAuthorText = styled.p`
  color: var(--color);
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width: 660px) {
    font-size: 20px;
  }
  @media screen and (max-width: 555px) {
    font-size: 15px;
  }
  @media screen and (max-width: 490px) {
    font-size: 11px;
  }
  @media screen and (max-width: 370px) {
    font-size: 7px;
  }
`;

export const DateInfo = styled.small`
  color: gray;
  opacity: 0.7;
  font-size: 12px;
`;