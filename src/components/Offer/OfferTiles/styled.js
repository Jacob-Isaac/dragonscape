import styled from "styled-components";
import { ReactComponent as Marker } from "../../../images/marker.svg";
import { ReactComponent as githubLogo } from "../../../images/icodragon.svg";

export const StyledMarker = styled(Marker)`
    & circle {
        fill: #0366D6;
    }
`;
export const StyledGithubLogo = styled(githubLogo)`
   width: 88px;
        height: 88px;
    & path {
        fill: ${({theme}) => theme.color.dragonGreen};
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 38px;
        height: 38px;
    }
`;