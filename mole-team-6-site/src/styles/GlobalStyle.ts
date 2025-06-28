import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.main};
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${({ theme }) => theme.fonts.pixel};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  a {
    color: ${({ theme }) => theme.colors.accent1};
    text-decoration: none;
    transition: color 0.3s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.accent2};
  }
`;
