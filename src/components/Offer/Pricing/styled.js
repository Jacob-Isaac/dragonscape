import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
@media screen and (max-width: 970px) {
  height: 100%;
  flex-direction: column;
  .pricing-component {
    margin: 2rem 0;
  }
}
`;

export const JSXMainContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
  padding: 5px;
  padding-bottom: 15px;
  width: 20rem;
  min-height: 40rem;
  height: max-content;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  color: #1d3557;
  box-shadow: 0 8px 14px -6px ${(props) => props.shadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 8px 26px -6px ${(props) => props.shadow};
    margin-bottom: 0.4rem;
  }
`;

export const Header = styled.div`
border-radius: 15px;
  margin: 0.6rem;
  height: 4rem;
  background-color: #ebf3fd;
  background-image: ${(props) => props.background};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 600;
`;

export const PricingContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const PriceContainer = styled.div`
  display: flex;
`;

export const CurrencyContainer = styled.div`
  margin-top: 0.5rem;
  margin-right: 0.2rem;
`;

export const Price = styled.div`
  span {
    font-size: 3rem;
  }
`;

export const Duration = styled.div`
  margin-top: 2rem;
`;

export const SubTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  margin: 0.4rem 0 1.3rem 0;
`;

export const PriceText = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  text-align: center;
  font-weight: 100;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
 
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 0.4rem;
  border: 0.1rem solid #1d3557;
  width: 90%;
  height: 3.5rem;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: ${({ theme }) => theme.color.dragonBlack};
    color: white;
  }
`;

export const DataContainer = styled.div`
  ul {
    list-style-type: none;
    margin-left: -13px;
    li {
      display: flex;
      align-items: center;
      font-size: ${({ route }) => (route === 'web' ? '0.8rem' : '0.9rem')};
      .true {
        color: #34f034;
        font-size: 1rem;
      }
      .false {
        color: #f54343;
      }
      svg {
        margin-right: 0.5rem;
        font-size: 0.8rem;
      }
      margin-bottom: 1rem;
    }
  }
`;