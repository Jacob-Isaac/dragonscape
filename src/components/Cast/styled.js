import styled from "styled-components";

export const TilesPersonSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 100px auto;
  max-width: 1000px;
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    max-width: 600px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
    grid-template-columns: 1fr;
    gap: 18px;
    max-width: 200px;
    margin: 0 auto;
  }
`;
