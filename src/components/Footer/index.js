import React from "react";
import logo from "../../images/logo.png";
import {
  StyledGithubLogo,
  StyledInstagramLogo,
  StyledLinkedInLogo,
} from "../../styledComponents/StyledLogos/styled";
import {
  FooterContainer,
  FooterContent,
  FooterLinksColumn,
  Link,
  LinkSocial,
  FooterLinks,
  FooterLinksSocial,
  PrivacyPolicyLink,
  LogoColumn,
  Logo,
  CopyrightText,
} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinksColumn>
          <FooterLinks>
            <Link>start</Link>
            <Link>o nas</Link>
            <Link>oferta</Link>
            <Link>kontakt</Link>
          </FooterLinks>
          <FooterLinksSocial>
            <LinkSocial>
              <StyledGithubLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
            <LinkSocial>
              <StyledInstagramLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
            <LinkSocial>
              <StyledLinkedInLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
            <LinkSocial>
              <StyledLinkedInLogo style={{ maxWidth: "35px" }} />
            </LinkSocial>
          </FooterLinksSocial>
          <PrivacyPolicyLink>polityka prywatności</PrivacyPolicyLink>
        </FooterLinksColumn>
        <LogoColumn>
          <Logo src={logo} alt="Your Logo" />
          <CopyrightText>
            <span>&copy; 2023 YourWebsiteName. All rights reserved.</span>
          </CopyrightText>
        </LogoColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
