import React from 'react';
import Pricing from './Pricing';
import { MainContainer } from './styled';

const Price = () => {
    return (
        <MainContainer>
          <div className="pricing-component">
            <Pricing
              data={[
                { text: "3 new project / month", value: true },
                { text: "Basic interaction", value: false },
                { text: "Assets library", value: false },
                { text: "3 new project / month", value: true },
                { text: "Basic interaction", value: false },
                { text: "Assets library", value: false },
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
                { text: "3 new project / month", value: true },
                { text: "Basic interaction", value: true },
                { text: "Assets library", value: false },
                { text: "3 new project / month", value: true },
                { text: "Basic interaction", value: true },
                { text: "Assets library", value: false },
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
                { text: "3 new project / month", value: true },
                { text: "Basic interaction", value: true },
                { text: "Assets library", value: true },
                { text: "3 new project / month", value: true },
                { text: "Basic interaction", value: true },
                { text: "Assets library", value: true },
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
