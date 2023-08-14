import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormRegistration = styled(Form)`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background: var(--background-header);
  border: 1px solid var(--border-color);
  gap: 20px;
  border-radius: 5px;
  margin-top: 150px;
`;

export const FormRegistrationTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeedbackFormGroup = styled.div`
  width: 100%;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const InputForm = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  outline: none;
  color: var(--color);
  font-size: 18px;
  &::placeholder {
    opacity: 0.4;
    font-size: 15px;
  }
`;

export const ToggleShowPasword = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -10px);
`;

export const Btnwrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const BtnRegister = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background-color: var(--color);
    border: 1px solid var(--color);
    color: var(--border-color);
  }
`;

export const FormPageDescription = styled.p`
  max-width: 800px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  color: var(--color);
  font-size: 18px;
  line-height: 24px;
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 10px;
`;