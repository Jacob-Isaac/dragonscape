import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 180px;
  padding-top: 100px;
  margin-bottom: 280px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-top: -50px;
    margin-bottom: 80px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 26px;
  gap: 10px;
  min-width: 280px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 1px;
  }
`;

export const Portfolio = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.text};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 50px;
  }
  margin-top: 45px;
  margin-bottom: 45px;
`;

export const Subtitle = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  text-align: center;
  color: ${({ theme }) => theme.color.titleAndIcons};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
  margin-bottom: 45px;
`;
