import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  margin-top: 60px;
  margin-bottom: 60px;
  margin: 60px auto 60px;
  max-width: 1200px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Logo = styled.img`
  margin-top: 8px;
  margin-bottom: 2px;
  width: 120px;
  height: auto;
`;

export const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const FooterLinks = styled.span`
  list-style: none;
  gap: 20px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-left: -20px;
`;
export const FooterLinksSocial = styled.span`
  list-style: none;
  gap: 20px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-left: -14px;
`;

export const Link = styled.li`
  color: #333;
  font-size: 14px;

  cursor: pointer;
  transition: color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    color: #555;
  }
`;

export const LinkSocial = styled.a`
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-bottom: 10px;
  &:hover {
    color: #555;
  }
`;

export const PrivacyPolicyLink = styled(Link)`
  list-style: none;
  margin-left: 14px;
`;

export const CopyrightText = styled.p`
  color: #555;
  font-size: 12px;
`;