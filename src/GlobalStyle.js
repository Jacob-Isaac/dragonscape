import { createGlobalStyle } from "styled-components";
import darkBckgrnd from "../src/images/darkBackground.webp";
import lightBckgrnd from "../src/images/brightBackground.webp";


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
    /* background-size: cover;  */
    /* background-position:center; */
    background-size: cover; 
    font-family: 'Montserrat', sans-serif;
    /* transition: background 1s ease-in-out; */
    transition: background 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
    /* transition: background-image 1s cubic-bezier(0.69, 0.15, 0.31, 0.85); */
    /* -webkit-transition: background-image 1s ease-in-out; */
    ${({ isBodyOverflowHidden }) => isBodyOverflowHidden && `
      overflow: hidden;
    `}
         @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
          background-size: 1000px; 
  } 
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
         background-attachment: scroll ;
  } 
  }
  ${({ isLight }) => isLight && `
   body {
       background-image: url(${lightBckgrnd});
     }
  `}
`;
  