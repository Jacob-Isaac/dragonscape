import styled from "styled-components";

export const ContainerFooter = styled.div`
  padding-top: 160px;
  /* padding-bottom: 1160px; */
  max-width: 1216px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 90%;
  }
  margin-bottom: 230px;
`;

export const Container = styled.div`
  max-width: 1216px;
  margin: auto;
  min-width: 280px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 90%;
  }
  margin-bottom: 230px;
`;

export const ContainerPrivacyPolicy = styled.div`
/* background: ${({ theme }) => theme.color.dragonOrange} ; */
background: #f0f0f0;
  max-width: 1216px;
  margin: auto;
  min-width: 280px;
  border-radius: 20px;
  padding: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 90%;
  }
  margin-top: 230px;
  margin-bottom: 230px;
  /* box-shadow: 10px 10px 10px rgba(9, 10, 51, 0.05),
    0px 16px 58px rgba(9, 10, 51, 0.05); */
    box-shadow: 0px 0px 5px 5px rgba(9, 10, 51, 0.05),
    0px 16px 58px rgba(9, 10, 51, 0.05);
`;

