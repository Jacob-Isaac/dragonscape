import React from 'react';
import styled from 'styled-components';
import { ContainerFooter } from '../Container/styled';
import logo from "../../images/logo.png";
import { StyledGithubLogo, StyledInstagramLogo, StyledLinkedInLogo } from "../../features/StyledLogos/styled";

const FooterContainer = styled.footer`
 background-color: #f0f0f0;
   margin-top: 60px;
  margin-bottom: 60px;
  margin: 60px auto 60px; 
  /* padding: 20px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  max-width: 1200px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between; 
   align-items: flex-start; 
     width: 100%;
`;

const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the top */
`;

const Logo = styled.img`
margin-top: 8px;
margin-bottom: 2px;
  width: 120px; /* Set the width as needed */
  height: auto; /* Adjust height proportionally */
  /* margin-bottom: 20px;  */
`;

const FooterLinksColumn = styled.div`
 display: flex;
  flex-direction: column; 
  align-items: flex-start; 
   gap: 10px; /*
  max-height: 10px;  */

`;

const FooterLinks = styled.span`
  list-style: none;
 gap: 20px;
  display: flex;
  flex-direction: row;
 margin: 0 auto;
 margin-left: -20px;

`;
const FooterLinks2 = styled.span`
  list-style: none;
 gap: 20px;
  display: flex;
  flex-direction: row;
 margin: 0 auto;
 margin-left: -14px;

`;

const FooterLink = styled.li`
  color: #333;
  font-size: 14px;
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: color 0.3s ease;
  margin-bottom: 10px; /* Add margin between links */

  &:hover {
    color: #555;
  }
`;

const FooterLinkSocial = styled.a`
  color: #333;
  font-size: 14px;
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: color 0.3s ease;
  margin-bottom: 10px; /* Add margin between links */

  &:hover {
    color: #555;
  }
`;


const PrivacyPolicyLink = styled(FooterLink)`
/* margin-top:-7px; */
list-style: none;
margin-left: 14px;

  /* Additional styling specific to the privacy policy link */
`;

const CopyrightText = styled.p`

  color: #555;
  font-size: 12px;
`;

const Footer = () => {
  return (

    <FooterContainer>
      <FooterContent>
        <FooterLinksColumn>
          <FooterLinks>
          <FooterLink>start</FooterLink>
            <FooterLink>o nas</FooterLink>
            <FooterLink>oferta</FooterLink>
            <FooterLink>kontakt</FooterLink>
          </FooterLinks>
          <FooterLinks2>
          <FooterLinkSocial><StyledGithubLogo style={{ maxWidth: '35px' }}/></FooterLinkSocial>
            <FooterLinkSocial><StyledInstagramLogo style={{ maxWidth: '35px' }}/></FooterLinkSocial>
            <FooterLinkSocial><StyledLinkedInLogo style={{ maxWidth: '35px' }}/></FooterLinkSocial>
            <FooterLinkSocial><StyledLinkedInLogo style={{ maxWidth: '35px' }}/></FooterLinkSocial>
          </FooterLinks2>
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
