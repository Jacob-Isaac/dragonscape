import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import {
  JSXMainContainer,
  Header,
  PricingContainer,
  CurrencyContainer,
  PriceContainer,
  Price,
  Duration,
  SubTitle,
  PriceText,
  ButtonContainer,
  Button,
  DataContainer,
} from "./styled";

const Pricing = ({
  data,
  price,
  duration,
  background,
  shadow = "#a0c5fa",
  buttonContent,
  currency = "$",
  subTitle,
  priceText,
  headerText,
  route
}) => {
  return (
    <JSXMainContainer shadow={shadow}>
      <Header background={background}>{headerText}</Header>
      {price !== undefined && (
        <PricingContainer>
          <PriceContainer>
            <CurrencyContainer>
              <span>{currency}</span>
            </CurrencyContainer>
            <Price>
              <span>{price}</span>
            </Price>
            {price < 0 && (
              <Duration>
                <span> {duration === "m" ? "/ mo" : "/ yr"}</span>
              </Duration>
            )}
          </PriceContainer>
          {subTitle && (
            <SubTitle>
              <h4>{subTitle}</h4>
            </SubTitle>
          )}
          {priceText && (
            <PriceText>
              <h5>{priceText}</h5>
            </PriceText>
          )}
        </PricingContainer>
      )}
      {buttonContent && (
        <ButtonContainer>
          <Button>{buttonContent}</Button>
        </ButtonContainer>
      )}
      {data && (
        <DataContainer route={route}>
          <ul>
            {data.map((dt, index) => (
              <li key={index}>
                {dt.value ? (
                  <FaCheck className="true" color="#32937D" />
                ) : (
                  <ImCross className="false" color="#D76460" />
                )}
                {dt.text}
              </li>
            ))}
          </ul>
        </DataContainer>
      )}
    </JSXMainContainer>
  );
};

Pricing.propTypes = {
  data: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  duration: PropTypes.oneOf(["y", "m"]),
  buttonContent: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default Pricing;
