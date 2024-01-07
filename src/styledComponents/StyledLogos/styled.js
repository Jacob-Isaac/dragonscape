import styled from "styled-components";
import { ReactComponent as githubLogo } from "../../images/github.svg";
import { ReactComponent as instagramLogo } from "../../images/instagram.svg";
import { ReactComponent as linkedInLogo } from "../../images/linkedIn.svg";
import { ReactComponent as facebookLogo } from "../../images/facebook.svg";

export const StyledGithubLogo = styled(githubLogo)`
  cursor: pointer;
  & path {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    fill: ${({ theme }) => theme.color.titleAndIcons};
  }
  &:hover {
    & path {
      fill: ${({ theme }) => theme.color.mainBlue};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 38px;
    height: 38px;
  }
`;

export const StyledFacebookLogo = styled(facebookLogo)`
  cursor: pointer;
  & path {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    fill: ${({ theme }) => theme.color.titleAndIcons};
  }
  width: 48px;
  height: 48px;
  &:hover {
    & path {
      fill: ${({ theme }) => theme.color.mainBlue};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 38px;
    height: 38px;
  }
`;

export const StyledInstagramLogo = styled(instagramLogo)`
  cursor: pointer;
  & path {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    fill: ${({ theme }) => theme.color.titleAndIcons};
  }
  &:hover {
    & path {
      fill: ${({ theme }) => theme.color.mainBlue};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 38px;
    height: 38px;
  }
`;

export const StyledLinkedInLogo = styled(linkedInLogo)`
  cursor: pointer;
  & path {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    fill: ${({ theme }) => theme.color.titleAndIcons};
  }
  &:hover {
    & path {
      fill: ${({ theme }) => theme.color.mainBlue};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 38px;
    height: 38px;
  }
`;
