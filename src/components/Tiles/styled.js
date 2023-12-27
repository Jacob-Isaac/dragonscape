import styled from "styled-components";
import { NavLink } from "react-router-dom";
import firstBckgrnd from "../../images/111.png";
import secondBckgrnd from "../../images/websiteDragon-01.svg";
import thirdBckgrnd from "../../images/2.png";
import fourthBckgrnd from "../../images/3.png";

const getImageUrl = (image) => {
  switch (image) {
    case "one":
      return firstBckgrnd;
    case "two":
      return secondBckgrnd;
    case "three":
      return thirdBckgrnd;
    case "four":
      return fourthBckgrnd;
    default:
      return ""; // Default value or fallback URL
  }
};



export const Tiles = styled.div`
  max-width: 586px;
  background: url(${(props) => getImageUrl(props.image)});
   background-size: cover;
  /* background-color: ${({ theme }) => theme.color.tilesBackground}; */
  border: 6px solid rgb(241, 163, 85);
  box-shadow: 0px 0px 10px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
  &:hover {
    transition: border-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
    border-color: rgb(215, 100, 96);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-top: 30px;
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 22px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0px;
    padding-bottom: 10px;
  }
`;

export const Name = styled.li`
  font-weight: ${({ theme }) => theme.fontSize.bold};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.dragonWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const Description = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.05em;
  text-align: justify;
  color: ${({ theme }) => theme.color.dragonRed};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    padding-right: 10px;
    text-align: left;
  }
`;

export const Links = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.text};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Demo = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const Code = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.color.mainBlue};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.linkBorder};
  padding-bottom: 1px;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.dragonRed};
  color: ${({ theme }) => theme.color.dragonWhite};
  cursor: pointer;
  width: 150px;
  margin: 0 auto;
  transition: 0.6s ease-in-out;
  &:hover {
    box-shadow: 2px -2px 0px #F1A355, -2px 2px 0px #F1A355, 2px 2px 0px #F1A355,
      -2px -2px 0px #F1A355;
    cursor: pointer;
   
  }
`;
