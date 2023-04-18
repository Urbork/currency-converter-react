import styled from "styled-components";

export const DateElement = styled.p`
  max-width: 320px;
  margin: 16px auto;
  padding: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 16px;
`;
