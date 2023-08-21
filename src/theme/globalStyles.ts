import { createGlobalStyle } from "styled-components";
import "../reset.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme?.main?.background};
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.normal};
    font-family: ${({ theme }) => theme?.fontFamily?.inconsolata}, monospace;
  }
`;

export default GlobalStyle;
