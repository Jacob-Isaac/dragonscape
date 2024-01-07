import styled from "styled-components";

export const ImageTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const TextWrapper = styled.div`
  max-width: 50%;
`;

export const Image = styled.img`
 margin-top: 100px;
  min-width: 450px;
  max-width: 450px;
`;

export const Button = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02),
    0px 16px 20px rgba(9, 10, 51, 0.03);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.dragonOrange};
  color: ${({ theme }) => theme.color.dragonWhite};
  :hover {
    color: ${({ theme }) => theme.color.dragonBlack};
  }
`;