// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "Poppins", sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
