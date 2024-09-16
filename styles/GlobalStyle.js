import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f7f7f7;
    color: #333;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-weight: 800; // Extrabold für Headlines
  }

  p, li, button {
    font-weight: 400; // Regular für Textinhalte
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
