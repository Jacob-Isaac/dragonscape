import React from 'react';
import Pricing from './Pricing';
import { MainContainer } from './styled';

const Price = () => {
    return (
        <MainContainer>
          <div className="pricing-component">
            <Pricing
              data={[
                { text: "2x logo (w 2 wersjach każde)", value: true },
                { text: "Sygnet, Tagline, Logotyp", value: true },
                { text: "Warsztat Kreatywny", value: true },
                { text: "Poprawki - możliwe 3", value: true },
                { text: "Logo w formacie .png .webp .svg", value: true },
                // { text: "Logo w dowolnych formatach", value: false },
                { text: "Księga znaku", value: false },
                { text: "Pełna identyfikacja wizualna", value: false },
              ]}
              price={400}
              currency="PLN"
              buttonContent="Skontaktuj się"
              subTitle="Świetne na początek"
              priceText="Projekt logo z podstawową funkcjonalnością"
              headerText="podstawowy"
            />
          </div>
          <div className="pricing-component">
            <Pricing
              data={[
                { text: "2x logo (w 3 wersjach każde)", value: true },
                { text: "Sygnet, Tagline, Logotyp", value: true },
                { text: "Warsztat Kreatywny", value: true },
                { text: "Poprawki - bez limitu", value: true },
                // { text: "Logo w formacie .png .webp .svg", value: true },
                { text: "Logo w 4 dowolnych formatach", value: true },
                { text: "Księga znaku - podstawowa", value: true },
                { text: "Pełna identyfikacja wizualna", value: false },
              ]}
              price={800}
              background="linear-gradient(120deg, #8BC3C2 0%, #32937D 100%)"
              currency="PLN"
              buttonContent="Skontaktuj się"
              subTitle="dla wymagających"
              priceText="Księga znaku i możliwość poprawek bez limitu"
              headerText="rozszerzony"
            />
          </div>
          <div className="pricing-component">
            <Pricing
              data={[
                { text: "Wszystko to co poprzednio ", value: true },
                { text: "Grafiki- Facebook, LinkedIn etc.", value: true },
                { text: "Wizytówki, materiały reklamowe", value: true },
                { text: "Banery reklamowe", value: true },
                // { text: "Logo w formacie .png .webp .svg", value: true },
                { text: "1x Inny dowolny projekt", value: true },
                { text: "Księga znaku - rozszerzona", value: true },
                { text: "Kolorystyka i typografia marki", value: true },
              ]}
              price={1300}
              background="linear-gradient(to left, #F1A355 0%, #D76460 100%);"
              currency="PLN"
              buttonContent="Skontaktuj się"
              subTitle="Pełna kreacja marki"
              priceText="Kompletna identyfikacja wizualna."
              headerText="pełny"
            />
          </div>
        </MainContainer>
      );
    };

export default Price;
