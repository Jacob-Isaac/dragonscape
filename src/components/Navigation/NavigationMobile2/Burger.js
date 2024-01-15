import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import { useDispatch } from 'react-redux';
import { toggleBodyOverflow } from '../../../features/DataSlice/githubSlice';
import { FlagIconBody, ModeChange, DarkMode, Body, IconBody, StyledSunIcon } from '../styled';
import { changeTheme } from "../../../features/DataSlice/githubSlice";
import { useSelector } from 'react-redux';
import {
  selectIsLightMode,
} from "../../../features/DataSlice/githubSlice";

const StyledBurger = styled.div`
  -webkit-tap-highlight-color: transparent;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
const Wrapper = styled.div`
 -webkit-tap-highlight-color: transparent;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  z-index: 10;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
      right: 37px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      right: 30px;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
const handleNavLinkClick = () => {
  dispatch(toggleBodyOverflow());
  setOpen(!open);
};
const siteTheme = useSelector(selectIsLightMode);
  
  return (
    <>
   
      <StyledBurger open={open} onClick={handleNavLinkClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper>
      <ModeChange>
          <DarkMode></DarkMode>
          <IconBody onClick={() => dispatch(changeTheme())}>
            <Body>
              <StyledSunIcon $themes={siteTheme} />
            </Body>
          </IconBody>
        </ModeChange>
        </Wrapper>
      <RightNav open={open}/>
   
    </>
  )
}

export default Burger