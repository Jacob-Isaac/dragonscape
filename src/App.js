import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "./components/Container/styled";
import SkillsBlock from "./components/SkillsBlock/index";
import AboutMe from "./components/AboutMe";
import {
  skillsList,
  toLearnList,
} from "../src/components/SkillsBlock/List/contents.js";
import MainPage from "./features/MainPage";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { selectIsLightMode } from "../src/features/DataSlice/githubSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import NavigationBar from "./components/Navigation/index.js";
import NoResult from "./components/NoResult/index.js";
import { ContactUs } from "./components/ContactForm/contact.js";
import { Element } from "react-scroll";
import { H12 } from "./components/SkillsBlock/styled.js";
import Cast from "./components/Cast/index.js";
import cast from "./cast.json";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Block, Title } from "./components/SkillsBlock/styled.js";
import Daylight from "./images/noClouds.svg";
import RealFooter from "./components/RealFooter2/index.js";
import {
  fetchGithubData,
  selectPortfolioList,
  selectLoadingState,
} from "./features/DataSlice/githubSlice.js";

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

      <HashRouter>
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
                    <AboutMe isLight={lightMode} />
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
                      <SkillsBlock
                        children="slideInLeft"
                        title={"Dowiedz się, co możemy dla Ciebie zrobić ! 🛠️"}
                        content={skillsList}
                      />
                    </AnimatedOnScroll>
                  </Element>
                  <Element name="OfferSection" className="element">
                    <AnimatedOnScroll
                      animationIn="lightSpeedIn"
                      screenOffset="300"
                      animationInDuration="1000"
                    >
                      <MainPage />
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
                      <Footer />
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
              <Container>
                <H12>LOGO DESIGN </H12>
              </Container>
            }
          />
          <Route
            path="/webDev"
            element={
              <Container>
                <H12>WEB DEVELOPMENT</H12>
              </Container>
            }
          />
          <Route
            path="/seo"
            element={
              <Container>
                <H12>S E O bitch!</H12>
              </Container>
            }
          />
          <Route
            path="/socialMedia"
            element={
              <Container>
                <H12>Social Media</H12>
              </Container>
            }
          />
          <Route
            path="/offer"
            element={
              <Container>
                <MainPage />
              </Container>
            }
          />
          <Route
            path="/whyUs"
            element={
              <Container>
                {" "}
                <SkillsBlock
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
                  <Footer />
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
      </HashRouter>
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
