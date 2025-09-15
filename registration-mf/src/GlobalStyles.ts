import { createGlobalStyle } from 'styled-components';

/**
 * @component GlobalStyles
 * @description Глобальные стили для микрофронтенда UserInfo.
 */
export const GlobalStyles = createGlobalStyle`
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

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
