import styled, { css, keyframes } from "styled-components";
import { ReactComponent as ButtonImg } from "../../images/hireMe2.svg";
import { ReactComponent as SunIcon } from "../../images/SunIcon.svg";
import { ReactComponent as FlagIcon } from "../../images/FlagIcon.svg";
import { ReactComponent as EnglishIcon } from "../../images/english.svg";
import dragonLight from "../../images/me2.svg"
import dragonDark from "../../images/me.svg"

const oscillateAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;
const oscillateAnimationSecond = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  65% {
    transform: translateY(20px);
  }
  45% {
    transform: translateY(0);
  }
`;

export const StyledSunIcon = styled(SunIcon)`
  transition: transform 0.6s;
  ${({ $themes }) => $themes && css`
      transform: translateX(100%);
    `};
`;
export const StyledFlagIcon = styled(FlagIcon)`
transition: transform 0.6s;
${({ $themes }) => $themes && css`
    transform: translateX(100%);
  `};
  `;
  export const StyledEnglishIcon = styled(EnglishIcon)`
  transition: transform 0.6s;
  ${({ $themes }) => $themes && css`
      transform: translateX(100%);
    `};
    `;

export const IntroBlock = styled.div`
  margin-top: 72px;
  max-height: 604px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows:  0fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
  "photo mode"
        "photo txt" 
        "photo myName" 
        "photo article" 
        "photo hireButton"; 
  grid-row-gap: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "mode"
      "photo"
      "txt"
      "myName"
      "article"
      "hireButton";
    margin-top: 0px;
  }
`;

export const MyPhoto = styled.img`
  grid-area: photo;
  align-self: end;
  max-width: 398px;
  border-radius: 50%;
  margin-right: 66px;
  animation: ${oscillateAnimation} 4s ease-in-out infinite;
margin-bottom: 60px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 70%;
    min-width: 202px;
    align-self: start;
    width: 40%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
    min-width: 150px;
    width: 50%;
  }
`;

export const Text = styled.div`
  grid-area: txt;
  align-self: end;
   font-family: "Inter";
  color:  ${({ theme }) => theme.color.text};
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
  }
`;

export const Name = styled.img`
max-width: 390px;
  grid-area: myName;
  align-self: end;
  padding-bottom:20px;
  color: ${({ theme }) => theme.color.titleAndIcons};
  /* font-weight: 900; */
  /* letter-spacing: 0.05em; */
  animation: fadeInAnimation ease 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.extra}px) {
    font-size: 38px;
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* margin-bottom: 50px; */
`;

export const Article = styled.article`
  grid-area: article;
  align-self: center;
  max-width: 630px;
  font-family: "Inter";
  
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
   ${({theme}) => theme.color.DragonBlack};
  text-align: justify;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    width: 90%;
    align-self: center;
  }
`;


export const HireMeButton = styled.a`
  grid-area: hireButton;
  padding-top: 35px;
  width: 154px;
  height: 49px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
  }
`;

export const StyledButtonImg = styled(ButtonImg)`
  width: 154px;
  height: 49px;
  border-radius: 4px;
  transition: 0.6s ease-in-out;
  &:hover {
    box-shadow: 2px -2px 0px #F1A355, -2px 2px 0px #F1A355, 2px 2px 0px #F1A355,
      -2px -2px 0px #F1A355;
    cursor: pointer;
   
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 138px;
    height: 45px;
  }
`;

export const ModeChange = styled.div`
  /* grid-area: mode; */
  margin-right: -20px;
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    align-self: center;
    margin-bottom: -45px;
  }
`;
export const DarkMode = styled.div`
  color: #6e7e91;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  padding: 7px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const IconBody = styled.button`
  width: 47px;
  height: 27px;
  padding: 2px;
  border: 1px solid #6e7e91;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.darkModeBackground};
  transition: background-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
  &:hover {
    cursor: pointer;
  }
`;
export const FlagIconBody = styled.button`
  width: 47px;
  height: 27px;
  padding: 2px;
  border: 1px solid #6e7e91;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.darkModeBackground};
  transition: background-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
  &:hover {
    cursor: pointer;
  }
`;
export const Body = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: all 1.3s ease;
`;
const shakeAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-5px); }
  40% { transform: translateY(5px); }
  60% { transform: translateY(-5px); }
  80% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export const ArrowDown = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 68px;
  
  margin-bottom: 115px;
  margin-top: 70px; 
  cursor: pointer;
  animation: ${oscillateAnimationSecond} 4s ease-in-out infinite;
  transition: transform 0.3s ease; /* Add a transition for a smoother effect */

  &:hover {
    animation: ${shakeAnimation} 0.4s ease-in-out; /* Apply the shake animation on hover */
  }
`;


// export const ArrowDown= styled.img`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// max-width: 108px;
// margin-bottom: 115px;
// `; dobre do dymku czatu ktory zawsze jezdzi oraz do navigacji