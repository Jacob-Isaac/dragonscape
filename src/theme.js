import { css } from "styled-components";

export const lightTheme = {
  color: {
    tilesBackground: "#FFFFFF",
    tileTitle: "#0366D6",
    tileHover: "#0366d633",
    linkBorder: "#bad0e8",
    titleAndIcons: "#252525",
    // text: "#6E7E91",
    // text: "#697784",
    text: "#202638",
    background: "#E5E5E5",
    // bodyBackground: "#FBFBFE",
    bodyBackground: "#F9F5EF",
    dragonWhite: "#F9F4EA",
    mainBlue: "#0366D6",
    borderBottom: "#D1D5DA4D",
    blue: "#0366D6",
    black: "#000", // nowe 
    white: "#ffffff",
    grey: "#808080",
    whisper: "#F5F5FA",
    silver: "#C4C4C4",
    darkerGrey: "#7E839A",
    mystic: "#E4E6F0",
    pattensBlue: "#D6E4FF",
    scienceBlue: "#0044CC",
    darkModeBackground: "#F9F4EA",// DRAGONOWE
    dragonGreen: "#32937D",
    dragonBlue: "#8BC3C2",
    dragonWhite: "#FBF3E3",
    dragonBlack: "#202638",
    dragonRed: "#D76460",
    dragonOrange: "#F1A355",
  },

  breakpoint: {
    maxContentSize: 1368,
    tablet: 1060,
    mobile: 800,
    miniMobile: 500,
    extra: 878,
    tabletMax: 968, //tutaj nowe
    mobileMax: 650,
    between: 867,
  },
  fontSize: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export const darkTheme = {
  color: {
    tilesBackground: "rgba(54, 54, 54, 0.72)",
    tileTitle: "#FFFFFF",
    tileHover: "#0366d677",
    linkBorder: "#0366D6",
    titleAndIcons: "#FFFFFF",
    text: "#FFFFFF",
    background: "#252525",
    bodyBackground: "#252525",
    mainBlue: "#0366D6",
    borderBottom: "#D1D5DA4D",
    blue: "#5b96d9",
    black: "#000", // nowe 
    dragonWhite: "#F9F4EA",
    white: "#ffffff",
    grey: "#808080",
    whisper: "#F5F5FA",
    silver: "#C4C4C4",
    darkerGrey: "#7E839A",
    mystic: "#E4E6F0",
    pattensBlue: "#D6E4FF",
    scienceBlue: "#0044CC",
    darkModeBackground: "#252525",
  },

  breakpoint: {
    maxContentSize: 1368,
    tablet: 1060,
    mobile: 800,
    miniMobile: 500,
    extra: 878,
    tabletMax: 968, //tutaj nowe
    mobileMax: 650,
    between: 867,
  },
  fontSize: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export const FlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
