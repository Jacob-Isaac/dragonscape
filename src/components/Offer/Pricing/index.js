import React from 'react';
import Pricing from './Pricing';
import { MainContainer } from './styled';

const Price = ({ route }) => {

  return (
    <MainContainer>
      <div className="pricing-component">
        <Pricing
          data={route === "design" ?
            [
              { text: "2x logo (w 2 wersjach każde)", value: true },
              { text: "Sygnet, Tagline, Logotyp", value: true },
              { text: "Warsztat Kreatywny", value: true },
              { text: "Poprawki - możliwe 3", value: true },
              { text: "Logo w formacie .png .webp .svg", value: true },
              { text: "Księga znaku", value: false },
              { text: "Pełna identyfikacja wizualna", value: false },
            ]
            :
            [
              { text: "Landing page / wizytówka", value: true },
              { text: " Dostosowany projekt graficzny", value: true },
              { text: "   Linki do Social Media", value: true },
              { text: " Podpięcie analityki Google, raporty", value: true },
              { text: "    Optymalizacja pod SEO", value: true },
              { text: "Responsywność mobilna", value: true },
              { text: " Domena, hosting, e-mail - rok gratis", value: true },
            ]
          }
          price={route === "design" ? 400 : 700 + "+"}
          currency="PLN"
          buttonContent="Skontaktuj się"
          subTitle="Świetne na początek"
          priceText={route === "design" ? "Projekt logo z podstawową funkcjonalnością" : "Strona www z podstawową funkcjonalnością"}
          headerText={route === "design" ? "podstawowy" : "starter"}
          route={route}
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={route === "design" ?
            [
              { text: "2x logo (w 3 wersjach każde)", value: true },
       { text: "Sygnet, Tagline, Logotyp", value: true },
       { text: "Warsztat Kreatywny", value: true },
        { text: "Poprawki - bez limitu", value: true },
        { text: "Logo w 4 dowolnych formatach", value: true },
        { text: "Księga znaku - podstawowa", value: true },
       { text: "Pełna identyfikacja wizualna", value: false },
            ]
            :
            [
              { text: "Do 10 podstron", value: true },
              { text: "CMS, dostosowany projekt graficzny", value: true },
              { text: "Opcjonalnie: blog, galeria zdjęć", value: true },
              { text: "Linki do Social Media", value: true },
              { text: "SEO, analityka Google, raporty", value: true },
              { text: "Możliwość rozbudowy witryny", value: true },
              { text: " Domena, hosting, e-mail - rok gratis", value: true },
            ]
          }
          price={route === "design" ? 800 : 1500 + "+"}
          background="linear-gradient(120deg, #8BC3C2 0%, #32937D 100%)"
          currency="PLN"
          buttonContent="Skontaktuj się"
          subTitle="dla wymagających"
          priceText={route === "design" ? "Księga znaku i możliwość poprawek bez limitu" : "Strona z zakładkami, blogiem i galerią zdjęć"}
          headerText={route === "design" ? "rozszerzony" : "standard"}
          route={route}
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={route === "design" ?
            [
                   { text: "Wszystko to co poprzednio ", value: true },
                    { text: "Grafiki- Facebook, LinkedIn etc.", value: true },
                    { text: "Wizytówki, materiały reklamowe", value: true },
                   { text: "Banery reklamowe", value: true },
                 { text: "1x Inny dowolny projekt", value: true },
                { text: "Księga znaku - rozszerzona", value: true },
                      { text: "Kolorystyka i typografia marki", value: true },
            ]
            :
            [
              { text: "indywidualna ilość podstron", value: true },
              { text: "CMS, indywidualny projekt graficzny", value: true },
              { text: "Blog, galeria zdjęć, sklep internetowy", value: true },
              { text: "Utworzenie Social Mediów", value: true },
              { text: "SEO, analityka Google, raporty", value: true },
              { text: "dowolna możliwość rozbudowy", value: true },
              { text: "Domena, hosting, mail - rozszerzony", value: true },
            ]
          }
          price={route === "design" ? 1300 : 3000 + "+"}
          background="linear-gradient(to left, #F1A355 0%, #D76460 100%);"
          currency="PLN"
          buttonContent="Skontaktuj się"
          subTitle={route === "design" ? "Pełna kreacja marki" : "Pełna moc"}
          priceText={route === "design" ? "Kompletna identyfikacja wizualna." : "Pełny pakiet z możliwością sklepu internetowego"}
          headerText={route === "design" ? "pełny" : "plus"}
          route={route}
        />
      </div>
    </MainContainer>
  );
};

export default Price;