import { createGlobalStyle } from "styled-components";
import darkBckgrnd from "../src/images/dark.svg";
import lightBckgrnd from "../src/images/daylight.svg";




export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  body {
    background: ${({ theme }) => theme.color.bodyBackground};
    background-size: cover;
    background-attachment: fixed;
    background-image: url(${darkBckgrnd});
    font-family: 'Montserrat', sans-serif;
    transition: background-image 1s ease-in-out;
    ${({ isBodyOverflowHidden }) => isBodyOverflowHidden && `
      overflow: hidden;
    `}
  }
  ${({ isLight }) => isLight && `
    body {
      background-image: url(${lightBckgrnd});
    }
  `}
`;
