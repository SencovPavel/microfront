import { createGlobalStyle } from 'styled-components';

/**
 * @component GlobalStyles
 * @description Глобальные стили для всего приложения.
 */
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #282c34;
    color: #ffffff;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;
