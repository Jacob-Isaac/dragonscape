import React from "react";
import logo from "../../images/logo.png";
import {
  StyledFacebookLogo,
  StyledGithubLogo,
  StyledInstagramLogo,
  StyledLinkedInLogo,
} from "../../styledComponents/StyledLogos/styled";
import {
  FooterContainer,
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

import { ContainerFooter } from "../../styledComponents/Container/styled";
import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();
  const isInMain = location.pathname === "/";

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
           
            <StyledLink to="/aboutUs">o nas</StyledLink>
            <StyledLink to="/offer">oferta</StyledLink>
            <StyledLink to="/contact">kontakt</StyledLink>
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
            <Logo src={logo} alt="Website Logo" />{" "}
          </NavLink>
        

          <PrivacyPolicyLink to="/privacyPolicy">
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
