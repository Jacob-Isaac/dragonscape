import { createGlobalStyle } from "styled-components";
import darkBckgrnd from "../src/images/dark.svg";
import lightBckgrnd from "../src/images/noClouds.svg";
import { useSelector } from "react-redux";
import {selectIsLightMode } from "./features/DataSlice/githubSlice"

 
 /* transition: background 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);    */

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
    /* position: fixed; */
    background: ${({ theme }) => theme.color.bodyBackground};
    background-size: cover;
    background-attachment: fixed;
    background-image: url(${darkBckgrnd});
    /* background-repeat: no-repeat; */
    /* background-position: center center; */
    font-family: 'Inter', sans-serif;
    /* display: block; */
    transition: background-image 1s ease-in-out;
  }
  ${({ isLight }) => isLight && `
    body {
      background-image: url(${lightBckgrnd});
    }
  `}
`;
