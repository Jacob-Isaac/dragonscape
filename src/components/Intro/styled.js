import styled, { keyframes } from "styled-components";
import { ReactComponent as ButtonImg } from "../../images/contactUs.svg";

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
const shakeAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-5px); }
  40% { transform: translateY(5px); }
  60% { transform: translateY(-5px); }
  80% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export const IntroBlock = styled.div`
  margin-top: 72px;
  max-height: 604px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 0fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "photo mode"
    "photo txt"
    "photo myName"
    "photo article"
    "x hireButton";
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
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 0fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "photo mode"
      "photo txt"
      "photo myName"
      "photo article"
      "photo hireButton";
    margin-top: 92px;
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
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.color.text};
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
  padding-bottom: 20px;
  color: ${({ theme }) => theme.color.titleAndIcons};
  animation: fadeInAnimation ease 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
    max-width: 280px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.galaxyFold}px) {
    max-width: 240px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.extra}px) {
    font-size: 100px;
    padding-bottom: 30px;
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Article = styled.article`
transition: 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
  grid-area: article;
  align-self: center;
  max-width: 630px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.text};
  text-align: justify;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 15px;
    width: 90%;
    align-self: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
    text-align: start;
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
  border-radius: 8px;
  transition: 0.6s ease-in-out;
  &:hover {
    box-shadow: 0 0 8px ${({ theme }) => theme.color.buttonShadow};
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 138px;
    height: 45px;
  }
`;

export const ArrowDown = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 68px;
  margin-bottom: 115px;
  margin-top: 70px;
  cursor: pointer;
  animation: ${oscillateAnimationSecond} 4s ease-in-out infinite;
  transition: transform 0.3s ease;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobilefive}px) {
    margin-top: -30px;
    margin-left: auto;
    margin-right: 50px;
  }
  &:hover {
    animation: ${shakeAnimation} 0.4s ease-in-out;
  }
`;
