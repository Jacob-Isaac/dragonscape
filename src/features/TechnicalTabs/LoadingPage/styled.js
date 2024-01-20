import styled, { keyframes } from 'styled-components';
import { ReactComponent as Loading } from "../../../images/loading.svg";
import lightBckgrnd from "../../../images/daylight.svg"


const slideInOut = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;


export const StyledLoading = styled(Loading)`
  display: flex;
  align-items: center;
  height: 121px;
  transform: rotate(360deg);
  animation: spin;
  animation-duration: 1.25s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: unset;
    }
    to {
      transform: translateX(360deg);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 91px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 66px;
  margin-top: 406px;
  min-width: 280px;
`;

export const Message = styled.p`
  font-weight: ${({ theme }) => theme.fontSize.regular};
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #252525;
  line-height: 130%;
  padding-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.dragonBlack}; /* Change the background color as needed */
  opacity: 1;
  z-index: 999999;
  transition: opacity 1s ease-in-out; 
   background-image: url(${lightBckgrnd});
    background-color: ${({ theme }) => theme.color.bodyBackground};
    background-repeat: no-repeat;
    background-size: cover; 
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
          background-size: 1000px; 
  } 
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
         background-attachment: fixed;
  }  
`;