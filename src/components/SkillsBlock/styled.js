import styled from "styled-components";
import { ReactComponent as Marker } from "../../images/marker.svg";
import { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Block = styled.div`
  padding-top: 10px;
  padding-bottom: 15px;
  margin: auto;
  margin-top: 72px;
  border-radius: 4px;
`;


export const StyledMarker = styled(Marker)`
    /* margin-right: 16px; */
    flex-shrink: 0;
    & circle {
        fill: ${({ theme }) => theme.color.mainBlue};
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-right: 8px;
        width: 6px;
        height: 6px;
    }
`;


export const Title = styled.h2`
margin: 0 auto;
text-align: center;
font-weight: 600;
font-size: 70px;
line-height: 36px;
letter-spacing: 0.05em;
color: ${({theme}) => theme.color.titleAndIcons};
animation: fadeInAnimation ease 4s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
/* border-bottom: 5px solid ${({ theme }) => theme.color.dragonGreen}; */
 /* text-decoration: underline; 
  text-decoration-color: ${({ theme }) => theme.color.dragonGreen}; */
padding-bottom: 8px;
margin-bottom: 130px;
margin-top: 330px;

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
  font-size: 18px;
    }
`;

export const Div = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start; 
width: 380px;
height: 290px;
border: 1px solid ${({ theme }) => theme.color.dragonRed};
transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
/* transition: color 0.2s; */
&:hover {
    background-color: ${({ theme }) => theme.color.dragonRed};
     h1 {
    color: #f7f5f0;
   }
   p {
    color: #F9F4EA;
  } 
}
text-align: left;
padding-top: 20%;
padding: 15% 60px 60px 60px;

`;

export const Cos = styled.div`
overflow: hidden;
`;

export const H1 = styled.h1`
margin-bottom: -2px;
font-family: "Inter";
  font-style: normal;
  font-weight: 600;
   color: ${({ theme }) => theme.color.dragonRed};
`;

export const P = styled.p`
color: ${({ theme }) => theme.color.text};
font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 160%;
  letter-spacing: 0.05em;
`;

export const H12 = styled.h1`
margin-top: 270px;
font-family: "Inter";
  font-style: normal;
  font-weight: 600;
   color: ${({ theme }) => theme.color.dragonRed};
`;


// h1 {
//     color: #F9F4EA;
//   }
//   p {
//     color: #F9F4EA;
//   }