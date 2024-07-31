import { NavLink } from "react-router-dom";
import FlagToggle from "../../features/Hooks/FlagToggle.js";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as SunIcon } from "../../images/SunIcon.svg";

export const NavigationBackground = styled.div`
  z-index: 1000;
  height: 104px;
  width: 100%;
  min-width: 320px;
  position: fixed;
  top: ${(props) => (props.visible ? "0" : "-120px")};
  transition: top 0.3s, background-color 0.6s ease;
`;


export const StyledFlagToggle = styled(FlagToggle)`
  transition: transform 0.6s;
  ${({ $themes }) =>
    $themes &&
    css`
      transform: translateX(100%);
    `};
`;

export const NavigationList = styled.ul`
  display: grid;
  margin: 0;
  margin-right: 60px;
  margin-left: 40px;
  padding: 24px 11px;
  grid-template-columns: 1fr auto auto auto auto auto 0.15fr auto;
  list-style-type: none;
    grid-gap: 30px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-gap: 16px; 
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-gap: 11px; 
  }


  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr auto auto;
    row-gap: 20px;
    grid-gap: 6px;
    padding: 32px 12px;
  }
  
`;

export const NavigationLink = styled(NavLink)`
  font-size: 19px;
  font-weight: 600;
  color: ${(props) => props.fontcolor};
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 2px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
   font-size: 15px;
  }
  &:hover {
    color: ${({ theme, isNoon }) => (isNoon ? theme.color.dragonOrange : theme.color.dragonRed)};
  }
`;

export const NavigationLinkRed = styled.a`
  font-size: 19px;
  font-weight: 600;
  color: ${(props) => props.fontcolor};
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 2px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
   font-size: 15px;
  }
  &:hover {
    color: ${({ theme }) => theme.color.dragonRed};
  }
`;

export const NavScrollLink = styled(Link)`
  cursor: pointer;
  font-size: 19px;
  font-weight: 600;
  color: ${(props) => props.fontcolor};
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 2px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &:hover {
    color: ${({ theme, isNoon }) => (isNoon ? theme.color.dragonOrange : theme.color.dragonRed)};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
   font-size: 15px;
  }
`;

export const NavigationLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontSize.medium};
  display: flex;
  flex-wrap: nowrap;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 8px;
    height: 17px;
    font-size: 15px;
  }
`;

export const Dragon = styled.img`
  transition: 0.3s;
  &:hover {
    scale: 105%;
  }
`;

export const NavigationLogoLink = styled(NavLink)`
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
   font-size: 15px;
  }
`;

export const NavigationLogoScrollLink = styled(Link)`
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 50px;
  }
  cursor: pointer;
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

export const ModeChange = styled.div`
/* display: none; */
  margin-right: -20px;
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    align-self: center;
    margin-bottom: -45px;
  }
  /* @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-right: -22px;
  } */
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

export const StyledSunIcon = styled(SunIcon)`
  transition: transform 0.6s;
  ${({ $themes }) =>
    $themes &&
    css`
      transform: translateX(100%);
    `};
`;
