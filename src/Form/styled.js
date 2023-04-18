import styled, { css } from "styled-components";

export const MainForm = styled.form`
  padding: 16px;
  margin: 0 auto;
  max-width: 800px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.color.black};
`;

export const Fieldset = styled.fieldset`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const FormLegend = styled.legend`
  padding: 8px 16px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 8px;
`;

export const FormLabel = styled.label`
  font-weight: 700;
`;

export const FormInput = styled.input`
  width: 30%;
  margin-left: 16px;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.color.green};
  border-radius: 8px;
`;

export const FormSelect = styled.select`
  width: 30%;
  margin-left: 16px;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.color.green};
  border-radius: 8px;
`;

export const FormButton = styled.button`
  margin: 0 16px;
  padding: 8px 16px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.green};
  border: 2px solid ${({ theme }) => theme.color.green};
  border-radius: 8px;
  box-shadow: 0 1px 5px ${({ theme }) => theme.color.green};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};
    transform: scale(1.1);
  }

  ${({ reset }) =>
    reset &&
    css`
      padding: 4px 8px;
      font-size: 12px;
      font-weight: normal;
      border: none;
    `}
`;
