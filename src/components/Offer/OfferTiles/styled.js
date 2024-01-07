import styled from "styled-components";
import { ReactComponent as githubLogo } from "../../../images/icodragon.svg";

export const StyledGithubLogo = styled(githubLogo)`
   width: 80px;
        height: 80px;
        margin-bottom: -20px;
    & path {
        fill: ${({theme}) => theme.color.dragonBlack};
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 38px;
        height: 38px;
    }
`;