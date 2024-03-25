import { createGlobalStyle } from "styled-components";
import darkBckgrnd from "../src/images/jakis-01.webp";
import lightBckgrnd from "../src/images/brightBackground.webp";
import afternoonBckgrnd from "../src/images/dayBackgroundORANGE-01-01-01.webp";


export const GlobalStyle = createGlobalStyle`
  ${({ isNoon }) => console.log("isNoon:", isNoon)}
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    line-height: 140%;
  letter-spacing: 0.02em;
  font-weight: 400;
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
    font-family: 'Montserrat', sans-serif;
    transition: background 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);

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
  ${({ isLight, isNoon }) => isLight && (isNoon ? `
   body {
       background-image: url(${lightBckgrnd});
   }
` : `
   body {
       background-image: url(${afternoonBckgrnd});
   }
`)}
`;
  