import styled from "styled-components";

export const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 70px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.titleAndIcons};
  animation: fadeInAnimation ease 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
    font-size: 38px;
  }
`;

export const HeaderCustom = styled.h1`

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-top: 100px;
  color: ${({ theme }) => theme.color.text};
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const SubpageWrapper = styled.div`
 margin-top: 200px;
 /* margin-bottom: 600px; */
`;
export const SubpageWrapper2 = styled.div`
 margin-top: 60px;
 margin-bottom: 600px;
`;

export const ContactFormWrapper = styled.div`
height: 1250px;
  /* padding-bottom: 120px; */
  background-color: ${({ theme }) => theme.color.contactBackground};
   background-size: cover;
   @media (max-width: ${({ theme }) => theme.breakpoint.galaxyFoldPlus}px) {
     width: 21rem; 
  }
  /* background-repeat: no-repeat;  */
`;
