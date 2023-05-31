import styled from 'styled-components';

export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
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
  min-height: 150px;
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
    background-image: var(--background-body);
  }
`;