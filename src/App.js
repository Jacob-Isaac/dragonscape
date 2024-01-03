import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "./components/Container/styled";
import WhyUs from "./components/WhyUs/index";
import Intro from "./components/Intro";
import {
  skillsList,
  toLearnList,
} from "../src/components/WhyUs/List/contents.js";
import Offer from "./components/Offer";
import ContactForm from "./components/ContactForm/index.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { selectIsLightMode } from "../src/features/DataSlice/githubSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import NavigationBar from "./components/Navigation/index.js";
import NoResult from "./components/NoResult/index.js";
import { ContactUs } from "./components/ContactForm/contact.js";
import { Element } from "react-scroll";
import { H12 } from "./components/WhyUs/styled.js";
import Cast from "./components/Cast/index.js";
import cast from "./cast.json";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Block, Title } from "./components/WhyUs/styled.js";
import Daylight from "./images/noClouds.svg";
import RealFooter from "./components/RealFooter2/index.js";
import {
  fetchGithubData,
  selectPortfolioList,
  selectLoadingState,
} from "./features/DataSlice/githubSlice.js";
import WebPosition from "./components/Offer/OfferList/WebPosition/index.js";
import Package from "./components/Offer/OfferList/Package/index.js";
import Web from "./components/Offer/OfferList/Web/index.js";
import Design from "./components/Offer/OfferList/Design/index.js";

const Page = (props) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="page">
      {children}
    </div>
  );
};

function App() {
  const lightMode = useSelector(selectIsLightMode);
  const ifLoading = useSelector(selectLoadingState);
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
                    <div
                      style={{
                        width: "99.1vw",
                        height: "1000px",
                        paddingBottom: "120px",
                        backgroundColor: "#8BC3C2",
                        // backgroundImage: `url(${Daylight})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <ContactForm/>
                    </div>
                  </AnimatedOnScroll>
                </Element>
                <RealFooter />
              </AnimatedOnScroll>
            }
          />
          <Route
            path="/design"
            element={
            <Design/>
            }
          />
          <Route
            path="/webDev"
            element={
              <Web/>
            }
          />
          <Route
            path="/webPosition"
            element={
              <WebPosition/>
             
            }
          />
          <Route
            path="/fullPackage"
            element={ <Package/>
            }
          />
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
                <div style={{ marginTop: "200px" }}>
                  <ContactForm />
                </div>
              </Container>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <Container>
                <div style={{ marginTop: "200px" }}>
                  <Cast selectedCast={cast} />
                </div>
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

{
  /* <Routes>
          <Route
            path="*"
            element={
              <NoResult
                error404={<h1>404  </h1>}
                title={`Oops! This page doesn't exist! Please go back to Main Page :)`}
              />
            }
          />
        </Routes> */
}
{
  /* <Route
            path="/#skills"
            element={
              <SkillsBlock
                title={"Dowiedz się, co możemy dla Ciebie zrobić ! 🛠️"}
                content={skillsList}
              />
            }
          /> */
}
{
  /* <SkillsBlock
          content={toLearnList}
          title={"What i want to learn next 🚀"}
        />*/
}

// hinge - przyda sie , zepsuty i spada

// nowe podejście -  w czasie ifloading wyswietlaj całą stronę w danym kolorze a potem będzie się pooli cubic bezier wyswietlac cała strona,
// czyli cały app.js dac w container który pojawia się w cubic bezier. (lub pojedynczo kazdy container, 
//po prostu dac effect animacji cubic bezier i tyle, natomiast na ifloading całą stronę zastąpić razem z navbar jednokolorowym tłem/banerem)



// 1. blog (reaact blog biblioteka) 2. polityka prywatności (generator polityki) 3. cookies (biblioteka react) 4. oferta - naprawic przyciski do oferty i dodac tresc ofert
