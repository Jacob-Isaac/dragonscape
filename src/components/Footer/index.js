import React from "react";
import logo from "../../images/logoForBright.webp";
import logoDarkMode from "../../images/logoForDark.webp"
import {
  StyledFacebookLogo,
  StyledGithubLogo,
  StyledInstagramLogo,
  StyledLinkedInLogo,
} from "../../styledComponents/StyledLogos/styled";
import {
  FooterContent,
  FooterLinksColumn,
  StyledLink,
  ScrollLink,
  LinkSocial,
  FooterLinks,
  FooterLinksSocial,
  PrivacyPolicyLink,
  LogoColumn,
  Logo,
  CopyrightText,
} from "./styled";
import { NavLink } from "react-router-dom";
import { selectIsLightMode } from "../../features/DataSlice/dataSlice";
import { ContainerFooter } from "../../styledComponents/Container/styled";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {

  const location = useLocation();
  const isInMain = location.pathname === "/";
  const theme = useSelector(selectIsLightMode);

  return (
    <ContainerFooter>
      <FooterContent>
        <FooterLinksColumn>
          <FooterLinks>
          {isInMain ? (
          <ScrollLink
            activeClass="active"
            to="AboutMeSection"
            spy={true}
            smooth={false}
            offset={-270}
            duration={750}
          >
            start
          </ScrollLink>
        ) : (
          <StyledLink to="/">start</StyledLink>
        )}
           
            <StyledLink to="/o-nas">o nas</StyledLink>
            <StyledLink to="/oferta">oferta</StyledLink>
            <StyledLink to="/kontakt">kontakt</StyledLink>
          </FooterLinks>
          <FooterLinksSocial>
            <LinkSocial href="https://www.facebook.com/dragonscapePL" target="_blank">
              <StyledFacebookLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
            <LinkSocial href="https://www.instagram.com/dragonscapepl/" target="_blank">
              <StyledInstagramLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
            <LinkSocial href="https://www.linkedin.com/company/dragonscape/" target="_blank">
              <StyledLinkedInLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
            <LinkSocial href="https://github.com/Jacob-Isaac/dragonscape" target="_blank">
              <StyledGithubLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
          </FooterLinksSocial>
        </FooterLinksColumn>
        <LogoColumn>
      
          <NavLink to="/">
            <Logo   src={theme ? logo : logoDarkMode} alt="Website Logo" />{" "}
          </NavLink>
        

          <PrivacyPolicyLink to="/polityka">
            Polityka Prywatności
          </PrivacyPolicyLink>
          <CopyrightText>
            <span>&copy; 2023 Dragonscape. All rights reserved.</span>
          </CopyrightText>
        </LogoColumn>
      </FooterContent>
    </ContainerFooter>
  );
};

export default Footer;
