import styled from 'styled-components';

export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;
  background-image: var(--background-header);
  padding: 15px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FeedbackCommentFroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyleLabel = styled.label`
  display: block;
  color: var(--color);
  cursor: pointer;
`;

export const StyleInput = styled.input`
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  display: block;
  padding: 5px;
  outline: none;
  color: var(--color);
  font-size: 18px;
  font-weight: bold;
`;

export const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: 10px;
  min-height: 100px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  display: block;
  outline: none;
  color: var(--color);
  font-size: 18px;
  resize: none;
`;

export const ButtonComment = styled.button`
  max-width: 150px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  color: var(--color);
  padding: 10px;
  transition: all var(--transition);
  cursor: pointer;
  &:hover {
    background-color: var(--color);
    border: 1px solid var(--color);
    color: var(--hover-btn);
  }
`;