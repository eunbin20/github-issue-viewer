import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, div, ul, li, dl, dd, dt, ol, h1, h2, h3, h4, h5, h6, input, fieldset, legend, p, select, table, th, td, tr, textarea, button, form, figure, figcaption {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Apple SD Gothic Neo', arial, sans-serif;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vw;
    padding: 5rem;
  }
`;

export default GlobalStyle;
