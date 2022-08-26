import { createGlobalStyle, css } from 'styled-components';
import cssReset from './reset';

const fontFamily = `'Bitter', serif`;

const GlobalStyle = createGlobalStyle`
  ${cssReset}

  body {
    background: #fdfaf5; // Mais amarelo: #fbf6ea;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: url(/bg.png) center no-repeat;
      z-index: -1;
      opacity: 0.1;
      background-size: cover;
    }

    ${({ theme }) => css`
      color: ${theme.colors.text.default};
      font-size: ${theme.fontSize};
      font-weight: ${theme.fontWeight};
    `};
    font-family: ${fontFamily};
    font-weight: 400;
  }

  header, footer {
    width: 100%;
  }
  input {
    font-family: ${fontFamily};
    color: #000;
  }
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  b, strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;

export default GlobalStyle;
