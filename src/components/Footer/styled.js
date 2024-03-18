import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export const ScrollLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.color.text};
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.color.mainBlue};
  }
`;

export const FooterContent = styled.div`
min-width: 280px;
  max-width: 1216px;
  padding-top: 60px;
  padding-bottom: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
   @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
   @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin-top: 8px;
  margin-bottom: 2px;
  width: 120px;
  height: auto;
   transition: 0.3s;
   cursor: pointer;
  &:hover {
    scale: 105%;
  }
`;

export const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
   @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    align-items: center;
  }
`;

export const FooterLinks = styled.div`
  list-style: none;
  gap: 20px;
  display: flex;
  flex-direction: row;
`;
export const FooterLinksSocial = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
`;

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: ${({ theme }) => theme.color.text};
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.color.mainBlue};
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

export const PrivacyPolicyLink = styled(NavLink)`
color:  ${({ theme }) => theme.color.text};
text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  margin-top: 9px;
  margin-bottom: -4px;
  &:hover {
    color: ${({ theme }) => theme.color.mainBlue};
  }
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: 12px;
`;