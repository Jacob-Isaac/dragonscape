import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { toggleBodyOverflow } from "../../../features/DataSlice/githubSlice";
import { useDispatch } from "react-redux";

const Ul = styled.ul`
  -webkit-tap-highlight-color: transparent;
padding-top: 270px;
z-index:11;
  list-style: none;
  display: flex;
    flex-flow: column nowrap;
    background-color: #0D2538;
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

   
    color: #fff;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    `;

export const NavigationLinkRed = styled.a`
/* font-weight: ${({ theme }) => theme.fontSize.bold}; */
color: #fff;
text-decoration: none;
padding-top: 18px ;
    padding-bottom:18px;

   

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

const RightNav = ({ open, setOpen }) => {

  // const dispatch = useDispatch();
  // const handleNavLinkClick = () => {
  //   dispatch(toggleBodyOverflow());
  //   setOpen(!open);
  // };
 

  return (
    <Ul open={open}>
      <StyledNavLink exact to="/" onClick={() => setOpen(!open)}>start</StyledNavLink>
      <StyledNavLink exact to="/offer"  onClick={() => setOpen(!open)}>oferta</StyledNavLink>
      <StyledNavLink exact to="/aboutUs"  onClick={() => setOpen(!open)}>o nas</StyledNavLink>
      <NavigationLinkRed
          href="mailto:kontakt@dragonscape.pl"
          onClick={() => setOpen(!open)}
        >
          wycena
        </NavigationLinkRed>
      <StyledNavLink exact to="/contact"  onClick={() => setOpen(!open)}>kontakt</StyledNavLink>
    </Ul>
  )
}

export default RightNav