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
  h1 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h1};
    font-weight: ${({ theme }) => theme?.fontWeights?.bold};
  }
  h2 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h2};
    font-weight: ${({ theme }) => theme?.fontWeights?.bold};
  }
  h3 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h3};
    font-weight: ${({ theme }) => theme?.fontWeights?.bold};
  }
  h4 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h4};
    font-weight: ${({ theme }) => theme?.fontWeights?.bold};
  }
  h5 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h5};
    font-weight: ${({ theme }) => theme?.fontWeights?.bold};
  }
  h6 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h6};
    font-weight: ${({ theme }) => theme?.fontWeights?.bold};
  }
  caption {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.caption};
    font-weight: ${({ theme }) => theme?.fontWeights?.light};
  }
`;

export default GlobalStyles;
