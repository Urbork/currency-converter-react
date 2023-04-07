import styled, { css } from "styled-components";

export const MainForm = styled.form`
    padding: 16px;
    margin: 0 auto;
    max-width: 800px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 2px 10px #222;
`;

export const Fieldset = styled.fieldset`
    border-radius: 8px;
    background-color: whitesmoke;
`;

export const FormLegend = styled.legend`
    padding: 8px 16px;
    font-weight: 700;
    background-color: rgb(120, 165, 50);
    color: whitesmoke;
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
    border: 2px solid rgb(120, 165, 50);
    border-radius: 8px;
`;

export const FormButton = styled.button`
    margin: 0 16px;
    padding: 8px 16px;
    font-weight: 700;
    background-color: whitesmoke;
    color: rgb(120, 165, 50);
    border: 2px solid rgb(120, 165, 50);
    border-radius: 8px;
    box-shadow: 0 1px 5px rgb(120, 165, 50);
    cursor: pointer;

    &:hover {
        background-color: rgb(120, 165, 50);
        color: whitesmoke;
      }

    ${({reset}) => reset && css`
        padding: 4px 8px;
        font-size: 12px;
        font-weight: normal;
        border: none;
    `}
`;

