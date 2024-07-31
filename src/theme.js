import { css } from "styled-components";

export const lightTheme = {
  color: {
    tilesBackground: "#FFFFFF",
    tileTitle: "#0366D6",
    tileHover: "#0366d633",
    linkBorder: "#bad0e8",
    titleAndIcons: "#202638",
    // text: "#6E7E91",
    // text: "#697784",
    text: "#202638",
    background: "#E5E5E5",
    bodyBackground: "#F9F5EF",
    mainBlue: "#0366D6",
    borderBottom: "#D1D5DA4D",
    blue: "#0366D6",
    black: "#202638", // nowe
    white: "#F9F4EA",
    grey: "#808080",
    whisper: "#F5F5FA",
    silver: "#C4C4C4",
    darkerGrey: "#7E839A",
    mystic: "#E4E6F0",
    pattensBlue: "#D6E4FF",
    scienceBlue: "#0044CC",
    darkModeBackground: "#F9F4EA", // DRAGONOWE
    dragonGreen: "#32937D",
    dragonBlue: "#8BC3C2",
    dragonWhite: "#FBF3E3",
    dragonBlack: "#202638",
    dragonRed: "#D76460",
    dragonOrange: "#F1A355",
    dragonBackground: "#FBF3E3",
    offerTextBackground: "#FFFFFF",
    contactBackground: "#8BC3C2",
    buttonShadow: "#D76460",
    whyUsBorder: "#202638",
  },

  breakpoint: {
    maxContentSize: 1260,
    tablet: 1060,
    mobile: 799,
    mobilefive: 700,
    miniMobile: 500,
    galaxyFold: 315,
    galaxyFoldPlus: 348,
    extra: 878,
    tabletMax: 969, //tutaj nowe
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
    offerTextBackground: "#252525",
    tileTitle: "#FFFFFF",
    tileHover: "#0366d677",
    linkBorder: "#0366D6",
    titleAndIcons: "#FBF3E3",
    text: "#E2E0DA",
    background: "#252525",
    bodyBackground: "#202638",
    mainBlue: "#0366D6",
    borderBottom: "#D1D5DA4D",
    blue: "#5b96d9",
    black: "#202638", // nowe
    white: "#F9F4EA",
    grey: "#808080",
    whisper: "#F5F5FA",
    silver: "#C4C4C4",
    darkerGrey: "#7E839A",
    mystic: "#E4E6F0",
    pattensBlue: "#D6E4FF",
    scienceBlue: "#0044CC",
    darkModeBackground: "#202638",
    dragonBackground: "#252525",
    contactBackground: "#252525",
    dragonGreen: "#32937D",
    dragonBlue: "#8BC3C2",
    dragonBlack: "#202638",
    dragonRed: "#D76460",
    dragonOrange: "#F1A355",
    dragonWhite: "#FBF3E3",
    buttonShadow: "#F1A355",
    whyUsBorder: "#D76460",
  },

  breakpoint: {
     maxContentSize: 1260,
    tablet: 1060,
    mobile: 799,
    mobilefive: 700,
    miniMobile: 500,
    galaxyFold: 315,
    galaxyFoldPlus: 348,
    extra: 878,
    tabletMax: 969, //tutaj nowe
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
