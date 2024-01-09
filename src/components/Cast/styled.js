import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const TilesPersonSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 100px auto;
  max-width: 1048px;
  padding-left: 24px;
  padding-right: 24px;
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding-left: 0px;
  padding-right: 0px;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    max-width: 500px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
    gap: 10px;
    min-width: 290px;
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.galaxyFold}px) {
    margin-left: 11px; 
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  color: ${({ theme }) => theme.color.black};
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.color.black};
  }
`;
export const Wrapper = styled.section`
    display: flex;
    background: ${({ theme }) => theme.color.white};
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    transition: 0.3s;
        &:hover {
        scale: 105%;
        }
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        padding: 14px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        padding: 12px;
    }
`;
export const StyledTilePerson = styled.section`

    display: grid;
        grid-template-rows: repeat(4, min-content) 1fr;
        grid-template-areas: 
            "poster"
            "description"
            ;
`;
export const Poster = styled.img`
    grid-area: poster;
    width: 100%;
    border-radius: 5px;
    aspect-ratio: 2/3;
`;
export const NoPoster = styled.div`
    grid-area: poster;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.color.silver};
    aspect-ratio: 2/3;
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
`;
export const StyledPersonIcon = styled.div`
    width: 60px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        width: 50px;
    }
`;
export const Destription = styled.section`
    grid-area: description;
    margin: 16px 0 8px;
    line-height: 130%;
`;
export const PersonNameStyle = styled.div`
    font-weight: ${({ theme }) => theme.fontSize.medium};
    text-align: center;
    line-height: 130%;
`;
export const PersonRole = styled.div`
    font-weight: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.darkerGrey};
    text-align: center;
    line-height: 130%;
    font-size: 15px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        font-size: 12px;
    }
`;
