import React from 'react';
// import './style.css';
import styled from 'styled-components';
import Pricing from './Pricing';


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
            //   shadow="#8BC3C2"
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
            //   shadow="#D76460"
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
    
    const MainContainer = styled.div`
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* background-color: #f5f1ff; */
    
      @media screen and (max-width: 970px) {
        height: 100%;
        flex-direction: column;
        .pricing-component {
          margin: 2rem 0;
        }
      }
    `;

export default Price;
