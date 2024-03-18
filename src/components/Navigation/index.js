import React, { useState, useEffect } from "react";
import {
  NavigationBackground,
  NavigationLink,
  NavigationLinkRed,
  NavScrollLink,
  NavigationList,
  NavigationLogo,
  NavigationLogoLink,
  NavigationLogoScrollLink,
  Dragon,
  StyledFlagToggle,
  IconBody,
  ModeChange,
  FlagIconBody,
  Body,
  DarkMode,
  StyledSunIcon,
} from "./styled";
import logoTransparent from "../../images/logoForBright.webp";
import logo from "../../images/logoForDark.webp";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../features/DataSlice/githubSlice";
import {
  selectIsLightMode,
} from "../../features/DataSlice/githubSlice";
import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  const isInMain = location.pathname === "/";
  const dispatch = useDispatch();
  const siteTheme = useSelector(selectIsLightMode);
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollpos]);
  const getBackgroundColor = () => {
    if (prevScrollpos <= 320) {
      return "transparent"; // Set to transparent when at the top
    } else {
      return "#1A1F28"; // Set to black when scrolled down
    }
  };
  const getFontColor = () => {
    // Check if the scroll position is at the top or close to it
    if (prevScrollpos <= 320 && siteTheme) {
      return "#202638";
    } else {
      return "#CCCCCC";
    }
  };

  return (
    <NavigationBackground
      visible={visible}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <NavigationList>
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
              {prevScrollpos <= 320 ? (
                // Image to display when scroll position is at the top or close to it
                <Dragon src={siteTheme ? logoTransparent : logo} width="210" />
              ) : (
                // Image to display when scrolled down
                <Dragon src={logo} width="210" />
              )}
               
            </NavigationLogo>
          </NavigationLogoScrollLink>
        ) : (
          <NavigationLogoLink to="/">
           <NavigationLogo>
              {prevScrollpos <= 320 ? (
                // Image to display when scroll position is at the top or close to it
                <Dragon src={siteTheme ? logoTransparent : logo} width="210" />
              ) : (
                // Image to display when scrolled down
                <Dragon src={logo} width="210" />
              )}
               
            </NavigationLogo>
          </NavigationLogoLink>
        )}
        {isInMain ? (
          <NavScrollLink
            fontcolor={getFontColor()}
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
          <NavigationLink to="/" fontcolor={getFontColor()}>
            start
          </NavigationLink>
        )}
        {isInMain ? (
          <NavScrollLink
            fontcolor={getFontColor()}
            activeClass="active"
            to="OfferSection"
            spy={true}
            smooth={false}
            offset={-70}
            duration={750}
          >
            oferta
          </NavScrollLink>
        ) : (
          <NavigationLink fontcolor={getFontColor()} to="/offer">
            oferta
          </NavigationLink>
        )}
        <NavigationLinkRed
          fontcolor={getFontColor()}
          href="mailto:kontakt@dragonscape.pl"
        >
          wycena
        </NavigationLinkRed>
        <NavigationLink fontcolor={getFontColor()} to="/aboutUs">
          o nas
        </NavigationLink>
        {isInMain ? (
          <NavScrollLink
            fontcolor={getFontColor()}
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={false}
            offset={140}
            duration={850}
          >
            kontakt
          </NavScrollLink>
        ) : (
          <NavigationLink fontcolor={getFontColor()} to="/contact">
            kontakt
          </NavigationLink>
        )}
        {/* <ModeChange>
          <DarkMode></DarkMode>
          <FlagIconBody>
            <StyledFlagToggle $themes={siteTheme} />
          </FlagIconBody>
        </ModeChange> */}
        <ModeChange>
          <DarkMode></DarkMode>
          <IconBody onClick={() => dispatch(changeTheme())}>
            <Body>
              <StyledSunIcon $themes={siteTheme} />
            </Body>
          </IconBody>
        </ModeChange>
      </NavigationList>
    </NavigationBackground>
  );
};

export default NavigationBar;
