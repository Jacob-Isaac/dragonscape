import styled from "styled-components";

export const ContainerFooter = styled.div`
  padding-top: 160px;
  padding-bottom: 1160px;
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
