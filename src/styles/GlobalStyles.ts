import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.5;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`;