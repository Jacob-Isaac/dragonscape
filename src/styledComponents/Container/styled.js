import styled from "styled-components";

export const ContainerContact = styled.div`
  padding-top: 160px;
  /* padding-bottom: 1160px; */
  max-width: 1216px;
  margin: auto;
 
  @media (max-width: ${({ theme }) => theme.breakpoint.maxContentSize}px) {
    width: 90%;
  }
  margin-bottom: 230px;
`;

export const ContainerFooter = styled.div`
  background-color: ${({ theme }) => theme.color.bodyBackground};
  @media (max-width: ${({ theme }) => theme.breakpoint.maxContentSize}px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  transition: 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
`;

export const Container = styled.div`
  max-width: 1216px;
  min-width: 310px;
  margin-left: 20px;
       margin-right: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
width: 90%;
margin:auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.maxContentSize}px) {
    margin: auto;
  }
  margin-bottom: 230px;
`;

export const ContainerPrivacyPolicy = styled.div`
/* background: ${({ theme }) => theme.color.dragonOrange} ; */
background: #fff9ff;
  max-width: 1216px;
  margin: auto;
  min-width: 280px;
  border-radius: 20px;
  padding: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.maxContentSize}px) {
    width: 90%;
  }
  margin-top: 230px;
  margin-bottom: 230px;
  /* box-shadow: 10px 10px 10px rgba(9, 10, 51, 0.05),
    0px 16px 58px rgba(9, 10, 51, 0.05); */
    box-shadow: 0px 0px 5px 5px rgba(9, 10, 51, 0.05),
    0px 16px 58px rgba(9, 10, 51, 0.05);
     @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   font-size: 12px;
    padding: 30px;
      margin-top: 160px;
  margin-bottom: 100px;
  }
   @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
   font-size: 11px;
    padding: 17px;
  }
`;

