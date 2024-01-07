import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Container } from "./styledComponents/Container/styled";
import WhyUs from "./components/WhyUs/index";
import Intro from "./components/Intro";
import { skillsList } from "../src/components/WhyUs/List/contents.js";
import Offer from "./components/Offer";
import ContactForm from "./components/ContactForm/index.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { selectIsLightMode } from "../src/features/DataSlice/githubSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import NavigationBar from "./components/Navigation/index.js";
import { Element } from "react-scroll";
import Cast from "./components/Cast/index.js";
import cast from "./features/Config/cast.json";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Title, SubpageWrapper, ContactFormWrapper } from "./styled.js";
import Footer from "./components/Footer/index.js";
import WebPosition from "./components/Offer/OfferList/WebPosition/index.js";
import Package from "./components/Offer/OfferList/Package/index.js";
import Web from "./components/Offer/OfferList/Web/index.js";
import Design from "./components/Offer/OfferList/Design/index.js";

function App() {

  const lightMode = useSelector(selectIsLightMode);

  return (
    <ThemeProvider theme={lightMode === true ? lightTheme : darkTheme}>
      <GlobalStyle isLight={lightMode} />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedOnScroll
                animationIn="slideInRight"
                screenOffset="100"
                animationInDuration="1200"
              >
                <Container>
                  <Element name="AboutMeSection" className="element">
                    <Intro isLight={lightMode} />
                  </Element>
                  <Element name="WhyUsSection" className="element">
                    <AnimatedOnScroll
                      animationIn="slideInRight"
                      screenOffset="100"
                      animationInDuration="1200"
                    >
                      <Title children="slideInRight">Dlaczego my ?</Title>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll
                      animationIn="slideInLeft"
                      screenOffset="300"
                      animationInDuration="1500"
                    >
                      <WhyUs
                        children="slideInLeft"
                        title={"Dowiedz się, co możemy dla Ciebie zrobić ! 🛠️"}
                        content={skillsList}
                      />
                    </AnimatedOnScroll>
                  </Element>
                  <Element name="OfferSection" className="element">
                    <AnimatedOnScroll
                      animationIn="slideInRight"
                      screenOffset="300"
                      animationInDuration="1000"
                    >
                      <Offer />
                    </AnimatedOnScroll>
                  </Element>
                </Container>
                <Element name="contactSection" className="element">
                  <AnimatedOnScroll
                    animationIn="slideInLeft"
                    animationInDuration="1500"
                  >
                   <ContactFormWrapper>
                      <ContactForm />
                      </ContactFormWrapper>
                  </AnimatedOnScroll>
                </Element>
                <Footer />
              </AnimatedOnScroll>
            }
          />
          <Route path="/design" element={<Design />} />
          <Route path="/webDev" element={<Web />} />
          <Route path="/webPosition" element={<WebPosition />} />
          <Route path="/fullPackage" element={<Package />} />
          <Route
            path="/offer"
            element={
              <Container>
                <Offer />
              </Container>
            }
          />
          <Route
            path="/whyUs"
            element={
              <Container>
                {" "}
                <WhyUs
                  title={"Dowiedz się, co możemy dla Ciebie zrobić ! 🛠️"}
                  content={skillsList}
                />
              </Container>
            }
          />
          <Route
            path="/contact"
            element={
              <Container>
                <SubpageWrapper>
                  <ContactForm />
                  </SubpageWrapper>
              </Container>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <Container>
               <SubpageWrapper>
                  <Cast selectedCast={cast} />
                  </SubpageWrapper>
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// hinge - przyda sie , zepsuty i spada

// nowe podejście -  w czasie ifloading wyswietlaj całą stronę w danym kolorze a potem będzie się pooli cubic bezier wyswietlac cała strona,
// czyli cały app.js dac w container który pojawia się w cubic bezier. (lub pojedynczo kazdy container,
//po prostu dac effect animacji cubic bezier i tyle, natomiast na ifloading całą stronę zastąpić razem z navbar jednokolorowym tłem/banerem)

// 1. blog (reaact blog biblioteka) 2. polityka prywatności (generator polityki) 3. cookies (biblioteka react) 4. oferta - naprawic przyciski do oferty i dodac tresc ofert
