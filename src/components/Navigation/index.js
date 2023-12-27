import React, { useState, useEffect } from 'react';
import {
  NavigationBackground,
  NavigationLink,
  NavigationLinkRed,
  NavScrollLink,
  NavigationList,
  NavigationLogo,
  NavigationLogoLink,
  NavigationLogoScrollLink,
  NavigationSearcher,
  StyledMovieIcon,
  Dragon,
  StyledFlagToggle
} from "./styled";
import logoTransparent from "../../images/logo.png"
import logo from "../../images/logo2.png";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../features/DataSlice/githubSlice";
import { changeFlag } from "../../features/DataSlice/githubSlice";
import {
  selectIsLightMode,
  selectIsPolishMode,
} from "../../features/DataSlice/githubSlice";
import {
  ModeChange,
  IconBody,
  FlagIconBody,
  Body,
  DarkMode,
  StyledSunIcon,
  StyledFlagIcon,
  StyledEnglishIcon,
  Flag,
} from "../AboutMe/styled.js";
import { ReactComponent as EnglishIcon } from "../../images/english.svg";
import { ReactComponent as FlagIcon } from "../../images/FlagIcon.svg";
import FlagToggle from "../../features/Hooks/FlagToggle.js";
import { Link, animateScroll as scroll  } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
  const isInMain = location.pathname === '/';
  const dispatch = useDispatch();
  const siteTheme = useSelector(selectIsLightMode);
  const languageTheme = useSelector(selectIsPolishMode);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [fontColor, setFontColor] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);

  const getBackgroundColor = () => {
    // Check if the scroll position is at the top or close to it
    if (prevScrollpos <= 320) {
      return 'transparent'; // Set to transparent when at the top
    } else {
      return '#1A1F28'; // Set to black when scrolled down
    }
  };
  const getFontColor = () => {
    // Check if the scroll position is at the top or close to it
    if (prevScrollpos <= 320 && siteTheme) {
      return "#202638"; // Set to transparent when at the top
    } else {
      return "#FBF3E3"; // Set to black when scrolled down
    }
  };


  return (
    <NavigationBackground visible={visible} style={{ backgroundColor: getBackgroundColor()}}>
      <NavigationList>
        {/* <NavigationLogoLink to="/movies"> */}
        {isInMain ? (
        <NavigationLogoScrollLink
          activeClass="active"
          to="AboutMeSection"
          spy={true}
          smooth={false}
          offset={-270}
          duration={650}
        >
          <NavigationLogo>
            {/* <StyledMovieIcon strokeWidth={3} opacity={1} />
            Movie Browser */}
            {/* <SvgLoader path={logo}></SvgLoader> */}
            {prevScrollpos <= 320 ? (
  // Image to display when scroll position is at the top or close to it
  <Dragon src={siteTheme ? logoTransparent : logo} width="220" />
) : (
  // Image to display when scrolled down
  <Dragon  src={logo} width="220" />
)}
          </NavigationLogo>
        </NavigationLogoScrollLink>
      ) : (
        <NavigationLogoLink to="/">
        <NavigationLogo>
        {prevScrollpos <= 320 ? (
  // Image to display when scroll position is at the top or close to it
  <Dragon src={logoTransparent} width="220" />
) : (
  // Image to display when scrolled down
  <Dragon src={logo} width="220" />
)}
        </NavigationLogo>
      </NavigationLogoLink>
      )} 
        {isInMain ? (
        <NavScrollLink
        fontColor={getFontColor()}
          activeClass="active"
          to="AboutMeSection"
          spy={true}
          smooth={false}
          offset={-270}
          duration={750}

        >
          start
        </NavScrollLink>
      ) : (
        <NavigationLink to="/" fontColor={getFontColor()}>
          start
        </NavigationLink>
      )} 
        {isInMain ? (
        <NavScrollLink fontColor={getFontColor()}
          activeClass="active"
          to="OfferSection"
          spy={true}
          smooth={false}
          offset={+400}
          duration={750}
        >
          oferta
        </NavScrollLink>
      ) : (
        <NavigationLink fontColor={getFontColor()} to="/offer">
          oferta
        </NavigationLink>
      )} 
        <NavigationLinkRed fontColor={getFontColor()} href="mailto:kontakt@dragonscape.pl">wycena</NavigationLinkRed>
    
        <NavigationLink fontColor={getFontColor()} to="/aboutUs">
          o nas
        </NavigationLink>
    
        {isInMain ? (
        <NavScrollLink fontColor={getFontColor()} activeClass="active"
        to="contactSection"
        spy={true}
        smooth={false}
        offset={70}
        duration={850}>
          kontakt
        </NavScrollLink>
      ) : (
        <NavigationLink fontColor={getFontColor()} to="/contact">
          kontakt
        </NavigationLink>
      )} 
        <ModeChange>
          <DarkMode></DarkMode>
          {/* DARK MODE {theme === false ? "ON" : "OFF"} */}
          <FlagIconBody>
            <StyledFlagToggle $themes={siteTheme}/>
          </FlagIconBody>
        </ModeChange>
        <ModeChange>
          <DarkMode></DarkMode>
          {/* DARK MODE {theme === false ? "ON" : "OFF"} */}
          <IconBody onClick={() => dispatch(changeTheme())}>
            <Body>
              <StyledSunIcon $themes={siteTheme} />
            </Body>
          </IconBody>
        </ModeChange>
        {/* <NavigationSearcher>
        blablalba
        </NavigationSearcher> */}
      </NavigationList>
    </NavigationBackground>
  );
};

export default NavigationBar;
