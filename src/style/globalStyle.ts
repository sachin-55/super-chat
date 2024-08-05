import { createGlobalStyle } from "styled-components";

import CSSReset from "./CSSReset";
import { scrollCss } from "./reusableStyle";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  ${CSSReset};
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  body {
    background: ${({ theme }) => theme?.main?.background};
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.normal};
    font-family: ${({ theme }) => theme?.fontFamily?.inconsolata}, monospace;

    ${scrollCss};
  }
`;

export default GlobalStyles;
