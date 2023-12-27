import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  max-width: 100px; /* Adjust the size of the logo */
  margin-bottom:15px;
`;

const CopyrightText = styled.div`
  color: #555;
  font-size: 12px;
  text-align: left;
  margin-top: 5px;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Pushes content to the bottom */
  align-items: flex-end; 
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const FooterLink = styled.li`
  color: #333;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }
`;

const SocialMediaLinks = styled.div`
  margin-top: 10px;
`;

const SocialMediaLink = styled.a`
  color: #555;
  font-size: 18px;
  margin-right: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const FooterLinksTitle = styled.h4`
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
`;

const SocialMediaLinksTitle = styled.h4`
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
`;

const RealFooter = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <Logo src="path_to_your_logo" alt="Logo" />
          <CopyrightText>&copy; 2023 YourWebsiteName</CopyrightText>
          <CopyrightText>All rights reserved.</CopyrightText>
        </LogoContainer>
        <FooterLinksContainer>
        <FooterLinksTitle>Dragonscape</FooterLinksTitle>
          <FooterLinks>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Services</FooterLink>
            <FooterLink>Contact</FooterLink>
            {/* Add more links as needed */}
          </FooterLinks>
          <SocialMediaLinks>
          <SocialMediaLinksTitle>Social Media</SocialMediaLinksTitle>
          <SocialMediaLink href="your_social_media_link">
              {/* Add your social media icon or text */}
              YOUTB
            </SocialMediaLink>
            <SocialMediaLink href="your_social_media_link">
              {/* Add your social media icon or text */}
              INSTA
            </SocialMediaLink>
            <SocialMediaLink href="your_social_media_link">
              {/* Add your social media icon or text */}
              LN
            </SocialMediaLink>
            <SocialMediaLink href="your_social_media_link">
              {/* Add your social media icon or text */}
              FB
            </SocialMediaLink>
          </SocialMediaLinks>
        </FooterLinksContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default RealFooter;