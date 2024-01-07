import styled from "styled-components";

export const Div = styled.div`
text-align: center;
max-width: 380px;
height: 290px;
margin: 0 auto;
border: 1px solid ${({ theme }) => theme.color.dragonBlack};
transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
&:hover {
    background-color: ${({ theme }) => theme.color.dragonRed};
    border: 1px solid ${({ theme }) => theme.color.dragonRed};
     h1 {
    color: #f7f5f0;
   }
   p {
    color: #F9F4EA;
  } 
}
text-align: left;
padding-top: 30%;
padding: 60px 60px 60px 60px;
`;

export const H1 = styled.h1`
margin: 0 auto;
margin-top: 10px;
margin-bottom: -2px;
font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
   color: ${({ theme }) => theme.color.dragonRed};
      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
       font-size: 25px;
    }
`;

export const P = styled.p`
color: ${({ theme }) => theme.color.text};
font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 160%;
  letter-spacing: 0.05em;
      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-top: 28px;
       font-size: 11px;
    }
`;

