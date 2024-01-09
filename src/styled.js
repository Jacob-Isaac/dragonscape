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
  margin-top: 270px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.color.dragonRed};
`;

export const SubpageWrapper = styled.div`
  margin-top: 200px;
`;

export const ContactFormWrapper = styled.div`
  width: 99.1vw;
  height: 1150px;
  /* padding-bottom: 120px; */
  background-color: #8BC3C2;
  /* background-size: cover;
  background-repeat: no-repeat; */
`;
