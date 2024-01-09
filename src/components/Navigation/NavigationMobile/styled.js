import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  z-index: 3;
  -webkit-tap-highlight-color: transparent;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: fixed;
  top: -100%;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.dragonBlack};
  transition: all 0.4s ease-in-out;
`;

export const WrapperUl = styled.ul`
  position: absolute;
  top: 65%;
  height: 100%;
  @media (min-width: 550px) {
    left: 50%;
  }
  @media (max-width: 550px) {
    left: 49%;
  }
  @media (max-width: 475px) {
    left: 48%;
  }
  @media (max-width: 400px) {
    left: 47%;
  }
  transform: translate(-54%, -50%);
  list-style: none;
  text-align: center;
`;

export const MenuButton = styled.label`
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  z-index: 4;
  right: 20px;
  /*left: 20px; */
  top: 6px;
  height: 60px;
  width: 67px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:before {
    transform: translateY(-8px);
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 40%;
    width: 40%;
    border-bottom: 3px solid #000;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &:after {
    transform: translateY(8px);
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 40%;
    width: 40%;
    border-bottom: 3px solid #000;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export const LabelSpan = styled.span`
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 40%;
  width: 40%;
  border-bottom: 3px solid #000;
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  ${({ checked }) =>
    checked === true &&
    css`
      transform: scaleX(0);
      border-bottom: 2px solid white;
    `}
`;

export const Input = styled.input`
  display: none;
  &:checked ~ ${Wrapper} {
    top: 0;
  }

  &:checked + ${MenuButton} {
    &:before {
      transform: rotate(45deg);
      border-color: white;
    }
    &:after {
      transform: rotate(-45deg);
      border-color: white;
    }
  }
`;

export const Cog = styled.img`
  position: fixed;
  z-index: 1;

  @media (min-width: 550px) {
    left: 45%;
    top: 50%;
    bottom: 50%;
    right: 55%;
  }
  @media (max-width: 550px) {
    left: 42%;
    top: 50%;
    bottom: 50%;
    right: 50%;
  }

  width: 70px;
  height: 70px;
  animation: transform 1.9s;
  @keyframes transform {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(359deg);
    }
    100% {
      transform: rotate(370deg);
    }
  }
`;

export const Content = styled.div`
  text-align: left;
  width: 100%;
  height: 80px;
  color: #202020;
  margin-bottom: 30px;
  /* background-color: rgb(255 255 255 / 80%); */
`;

export const ContentTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding-top: 20px;
  padding-left: 20px;
`;

export const Close = styled.label`
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: background 0.6s;
`;

export const MarginBottom = styled.div`
  margin-bottom: 100px;
`;

export const NavBar = styled.div`
  -webkit-tap-highlight-color: transparent;
  z-index: 999999;
  position: fixed;
  top: 0;
  height: 10%;
  width: 100%;
  min-width:265px;
`;

//

export const Button = styled.button`
  -webkit-tap-highlight-color: transparent;
 @media (min-width: 1280px) {
  width: 14%;
  }
  font-size: 15px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.dragonWhite};
  border: none;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;
  &:visited {
    color: black;
  }
  &:hover {
    color: rgb(97, 97, 97);
    cursor: pointer;
  }
  &:active {
    color: rgb(97, 97, 97);
    transform: scale(0.8);
    background-color:none;
  }
  ${({ disabled }) =>
    disabled === true &&
    css`
     color: rgb(158, 158, 158);
      &:hover {
        color: rgb(158, 158, 158);
        cursor: auto;
      }
      &:active {
        color: rgb(158, 158, 158);
        transform: none;
      }
    `}
    ${({ Mobile }) =>
    Mobile &&
    css`
font-size: 23px;
font-weight: normal;
      `};
    
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.color.dragonWhite};
 &:hover {
  color: rgb(97, 97, 97);
      }
 ${({ Red }) =>
    Red &&
    css`
      color: #D76460;
      &:hover {
        color: #8a0000;
      }
      `};
     
    `;
