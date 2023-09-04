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
  h1 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h1};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
  h2 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h2};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
  h3 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h3};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
  h4 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h4};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
  h5 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h5};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
  h6 {
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.h6};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
  caption{
    color: ${({ theme }) => theme?.main?.textColor};
    font-size: ${({ theme }) => theme?.fontSize?.caption};
    font-weight: ${({ theme }) => theme?.fontWeight?.light}; 
  }
`;

export default GlobalStyle;
