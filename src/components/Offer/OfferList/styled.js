import styled from "styled-components";
import adMobileFirst from "../../../images/adMobileFirst.svg";
import adMobileFirstDark from "../../../images/adMobileFirstForDark.svg";
import letter from "../../../images/letter.webp";
import letterLong from "../../../images/letterLong-01.webp";

export const ImageTextWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
 margin-top: 15%;  
   @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    flex-direction: column;
  }
    @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const PromujImg = styled.img`
 max-width:330px;
  transition: 0.3s;
  &:hover {
    scale: 105%;
  }
   @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    max-width:230px;
  }
`;

export const TextWrapper = styled.div`
transition: 0.2s cubic-bezier(0.69, 0.15, 0.31, 0.85);
color: ${({ theme }) => theme.color.text};
font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
 @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
   @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
 max-width: 50%;
  }
  
`;

export const Image = styled.img`
 margin-top: 100px;
 max-width: 450px;
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    /* max-width: 320px; */
     margin: 0 auto;
     max-width: 300px;
  }
`;
export const AdMobile = styled.img`
 /* margin-top: 100px;
  min-width: 450px;
  max-width: 450px; */
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    content: url(${({ brightTheme }) => brightTheme ? adMobileFirst : adMobileFirstDark});
  }
`;
export const AdMobileSecond = styled.img`
 /* margin-top: 100px;
  min-width: 450px;
  max-width: 450px; */
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02),
    0px 16px 20px rgba(9, 10, 51, 0.03);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.dragonOrange};
  color: ${({ theme }) => theme.color.dragonWhite};
  :hover {
    color: ${({ theme }) => theme.color.dragonBlack};
  }
`;



export const LetterPaperContainer = styled.div`
padding: 40px;
 background: url(${letter});
 width: 600px;
   background-size: contain;
   background-repeat: no-repeat;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
  width: 1000px;
  height: 100px;
   background: url(${letterLong});
  }
 /* background-repeat: no-repeat;
  background-size: contain;
  background-position: center center; */
`;

export const Badge = styled.img`
max-width: 120px;
  height: 120px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
margin: 0 auto;
margin-bottom: -80px;
  }
   @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
display: none;
  }
`;

export const Figure = styled.figure`

   @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
  display:none;
  }
`;
export const FigureMobile = styled.figure`
max-width: 450px;
   @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
  display:none;
  }
`;

export const Figcaption = styled.figcaption`
color: ${({ theme }) => theme.color.text};
font-size: 15px;
   @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size:10px;
  }
`;
export const RollerWrapper = styled.div`
width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
  min-height: 520px;
  }
`;

export const Position = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
  align-self: flex-start;
  }
`;