import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    min-width: 320px;
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }
`;
