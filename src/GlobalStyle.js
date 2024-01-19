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
    background-image: url(${darkBckgrnd});
    background-color: ${({ theme }) => theme.color.bodyBackground};
    background-repeat: no-repeat;
    background-size: cover; 
    /* background-position:center; */
   
    font-family: 'Montserrat', sans-serif;
    transition: background-image 1s ease-in-out;
    -webkit-transition: background-image 1s ease-in-out;
    ${({ isBodyOverflowHidden }) => isBodyOverflowHidden && `
      overflow: hidden;
    `}
         @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
          background-size: 1000px; 
  } 
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
         background-attachment: fixed;
  } 
  }
  ${({ isLight }) => isLight && `
    body {
      background-image: url(${lightBckgrnd});
    }
  `}
`;
