import { NavLink } from "react-router-dom";
import MovieIcon from "../../images/MovieIcon";
import FlagToggle from "../../features/Hooks/FlagToggle.js";
import styled, { css, keyframes } from "styled-components";
import { Link, animateScroll as scroll  } from 'react-scroll';

export const NavigationBackground = styled.div`
z-index: 1000;
  /* background-color: #1A1F28; */
  height: 104px;
  width: 100%;
  min-width: 320px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    height: 152px;
  }
  position: fixed;
  top: ${props => (props.visible ? '0' : '-120px')};
transition: top 0.3s, background-color 0.4s ease;
`;

export const StyledFlagToggle = styled(FlagToggle)`
  transition: transform 0.6s;
  ${({ $themes }) => $themes && css`
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
  /* max-width: ${({ theme }) => theme.breakpoint.maxContentSize}px; */

  @media (min-width: 1040px) {
    grid-gap: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr auto auto;
    row-gap: 20px;
    grid-gap: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr auto auto;
    row-gap: 20px;
    grid-gap: 6px;
    padding: 32px 12px;
  }
`;

export const NavigationLink = styled(NavLink)`
  /* background-color:#1A1F28; */
  font-size: 19px;
  /* line-height: 21px; */
  font-weight: ${({ theme }) => theme.fontSize.bold};
  color: ${(props) => props.fontColor}; 
  /* text-transform: uppercase; */
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  /* padding: 8px 24px; */
  /* height: 48px; */
  margin-top: 2px;
  /* border: 1px solid #1A1F28; */
  -webkit-transition: all 0.5s ease;
-moz-transition: all 0.5s ease;
-ms-transition: all 0.5s ease;
-o-transition: all 0.5s ease;
transition: all 0.5s ease;
&:hover{
        color: ${({ theme }) => theme.color.dragonOrange};
    }


  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 0px 14px;
    height: 34px;
    margin-top: -1px;
  }
  /* &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      border-radius: 24px;
    }
  } */
`;
export const NavigationLinkRed = styled.a`
  /* background-color:#1A1F28; */
  font-size: 19px;
  /* line-height: 21px; */
  font-weight: ${({ theme }) => theme.fontSize.bold};
   color:  ${(props) => props.fontColor}; 
  /* text-transform: uppercase; */
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  /* padding: 8px 24px; */
  /* height: 48px; */
  margin-top: 2px;
  /* border: 1px solid #1A1F28; */
  -webkit-transition: all 0.5s ease;
-moz-transition: all 0.5s ease;
-ms-transition: all 0.5s ease;
-o-transition: all 0.5s ease;
transition: all 0.5s ease;
&:hover{
        color: ${({ theme }) => theme.color.dragonRed};
    }


  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 0px 14px;
    height: 34px;
    margin-top: -1px;
  }
  /* &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      border-radius: 24px;
    }
  } */
`;

export const NavScrollLink = styled(Link)`
cursor:pointer;
  /* background-color:#1A1F28; */
  font-size: 19px;
  /* line-height: 21px; */
  font-weight: ${({ theme }) => theme.fontSize.bold};
   color:  ${(props) => props.fontColor}; 
  /* text-transform: uppercase; */
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  /* padding: 8px 24px; */
  /* height: 48px; */
  margin-top: 2px;
  /* border: 1px solid #1A1F28; */
  -webkit-transition: all 0.5s ease;
-moz-transition: all 0.5s ease;
-ms-transition: all 0.5s ease;
-o-transition: all 0.5s ease;
transition: all 0.5s ease;
&:hover{
        color: ${({ theme }) => theme.color.dragonOrange};
    }


  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 0px 14px;
    height: 34px;
    margin-top: -1px;
  }
  /* &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      border-radius: 24px;
    }
  } */
`;

export const NavigationLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontSize.medium};
  /* font-size: 23px; */
 
  display: flex;
  flex-wrap: nowrap;
  /* align-items: center; */
  color: ${({ theme }) => theme.color.white};
   /* transform-origin: 0 0 ;  */
  /* transition: transform 0.5s ease-in-out ;  */
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 8px;
    height: 17px;
    font-size: 13px;
  }
`;

export const Dragon = styled.img`
  transition: 0.3s;
  &:hover{
        scale: 105%;
    }
`;



export const NavigationSearcher = styled.div`
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin: 0 auto;
    font-size: 20px;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 auto;
    margin-top: 20px;
    font-size: 16px;
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

export const NavigationLogoLink = styled(NavLink)`
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 50px;
  }
`;
export const NavigationLogoScrollLink = styled(Link)`
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 50px;
  }
  cursor: pointer;
`;

export const StyledMovieIcon = styled(MovieIcon)`
  width: 35px;
  margin-right: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 20px;
    margin-right: 6px;
    margin-bottom: 2px;
  }
`;
