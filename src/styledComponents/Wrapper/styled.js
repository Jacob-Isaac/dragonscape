import styled from "styled-components";
import { FlexCenter } from "../../theme";

// export const Tiles = styled.div`
//   width: 586px;
//   height: 322px;
//   background-color: ${({ theme }) => theme.color.tilesBackground};
//   border: 6px solid rgba(209, 213, 218, 0.3);
//   box-shadow: 0px 0px 10px rgba(9, 10, 51, 0.02),
//     0px 16px 58px rgba(9, 10, 51, 0.03);
//   border-radius: 4px;
// `; for later

export const Wrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  row-gap: 120px;
  max-width: 1216px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    ${FlexCenter}
  }
`;

export const SmoothWrapper= styled.div`
 background-color: #ffffff;
 padding-left: 40px;
 padding-right: 40px;
 padding-top: 20px;
 padding-bottom: 30px;
 box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02),
    0px 16px 20px rgba(9, 10, 51, 0.03);
border-radius: 20px;
margin-bottom: 30px;

@media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
  width:100%;
  /* text-align: center; */
  }
`;


export const NegativeMarginTop = styled.div`
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
margin-top: -100px;
  }
`;
export const NegativeTop = styled.div`
margin-top: -50px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
margin-top: -160px;
  }
`;