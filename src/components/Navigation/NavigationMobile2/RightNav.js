import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { toggleBodyOverflow } from "../../../features/DataSlice/githubSlice";
import { useDispatch } from "react-redux";

const Ul = styled.ul`
  -webkit-tap-highlight-color: transparent;
padding-top: 240px;
z-index:11;
  list-style: none;
  display: flex;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.color.black};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -5%;
    /* right: 0; */
    height: 110%;
    width: 100%;
    padding-left: 0px;
    /* padding-top: 3.5rem; */
    transition: transform 0.3s ease-in-out;
    margin: 0 auto;
    align-items: center;
    font-size: 20px;
`;

const StyledNavLink = styled(NavLink)`
  padding-top: 18px ;
    padding-bottom:18px;
font-size: 30px;
color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    `;

export const NavigationLinkRed = styled.a`
/* font-weight: ${({ theme }) => theme.fontSize.bold}; */
color: ${({ theme }) => theme.color.white};
text-decoration: none;
padding-top: 18px ;
    padding-bottom:18px;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
-webkit-transition: all 0.5s ease;
-moz-transition: all 0.5s ease;
-ms-transition: all 0.5s ease;
-o-transition: all 0.5s ease;
transition: all 0.5s ease;
&:hover {
  color: ${({ theme }) => theme.color.dragonRed};
}
`;

const RightNav = ({ open, handleNavLinkClick }) => {

  // const dispatch = useDispatch();
  // const handleNavLinkClick = () => {
  //   dispatch(toggleBodyOverflow());
  //   setOpen(!open);
  // };
 

  return (
    <Ul open={open}>
      <StyledNavLink to="/" onClick={() => handleNavLinkClick()}>start</StyledNavLink>
      <StyledNavLink to="/offer"  onClick={() => handleNavLinkClick()}>oferta</StyledNavLink>
      <StyledNavLink to="/aboutUs"  onClick={() => handleNavLinkClick()}>o nas</StyledNavLink>
      <NavigationLinkRed
          href="mailto:kontakt@dragonscape.pl"
          
        >
          wycena
        </NavigationLinkRed>
      <StyledNavLink to="/contact"  onClick={() => handleNavLinkClick()}>kontakt</StyledNavLink>
    </Ul>
  )
}

export default RightNav