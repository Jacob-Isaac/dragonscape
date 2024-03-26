import { HashRouter, Route, Routes } from "react-router-dom";
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { Container } from "./styledComponents/Container/styled";
import WhyUs from "./components/WhyUs/index";
import Intro from "./components/Intro";
import { skillsList } from "../src/components/WhyUs/List/contents.js";
import Offer from "./components/Offer";
import ContactForm from "./components/ContactForm/index.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { selectIsLightMode, selectIsNoonMode } from "./features/DataSlice/dataSlice.js";
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
import CookieBar from "./features/TechnicalTabs/CookieBar/index.js";
import PrivacyPolicy from "./features/TechnicalTabs/PrivacyPolicy/index.js";
import useWindowDimensions from "./features/Hooks/useWindowDimensions.js";
import { selectIsBodyOverflowHidden } from "./features/DataSlice/dataSlice.js";
import Navbar from "./components/Navigation/NavigationMobile/Navbar.js";
import ScrollToTopHook from "./features/Hooks/ScrollToTop.js";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./images/arrowDown.svg";
import { NegativeMarginTop, NegativeTop } from "./styledComponents/Wrapper/styled.js";
import NoResult from "./features/TechnicalTabs/NoResult/index.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "TIME_UPDATE" });
  }, [dispatch]);
  const isBodyOverflowHidden = useSelector(selectIsBodyOverflowHidden);
  const lightMode = useSelector(selectIsLightMode);
  const noonMode = useSelector(selectIsNoonMode);
  const dimensions = useWindowDimensions();


  let navigationBar;
  if (dimensions.width < 970) {
    navigationBar = <Navbar isBodyOverflowHidden={isBodyOverflowHidden} isLight={lightMode} />;
  } else {
    navigationBar = <NavigationBar />;
  }

  return (
    <ThemeProvider theme={lightMode === true ? lightTheme : darkTheme}>
      <GlobalStyle
        isLight={lightMode}
        isNoon={noonMode}
        isBodyOverflowHidden={isBodyOverflowHidden}
      />
      <HashRouter>
        <ScrollToTopHook />
        {navigationBar}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container>
                  <Element name="AboutMeSection" className="element">
                    <Intro isLight={lightMode} />
                  </Element>
                  <Element name="WhyUsSection" className="element">
                    <AnimatedOnScroll
                      animationIn={
                        dimensions.width < 800 ? "zoomIn" : "slideInRight"
                      }
                       screenOffset={100}
                      animationInDuration={1200}
                    >
                      <Title>Dlaczego my ?</Title>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll
                      animationIn={
                        dimensions.width < 800 ? "zoomIn" : "slideInLeft"
                      }
                       screenOffset={300}
                      animationInDuration={1500}
                    >
                      <WhyUs
                        title={"Dowiedz się, co możemy dla Ciebie zrobić ! 🛠️"}
                        content={skillsList}
                      />
                    </AnimatedOnScroll>
                  </Element>
                  <Element name="OfferSection" className="element">
                    <AnimatedOnScroll
                      animationIn={
                        dimensions.width < 800 ? "zoomIn" : "slideInRight"
                      }
                      screenOffset={300}
                      animationInDuration={1000}
                    >
                      <Offer/>
                    </AnimatedOnScroll>
                  </Element>
                </Container>
                <Element name="contactSection" className="element">
                  <AnimatedOnScroll
                    animationIn={
                      dimensions.width < 800 ? "zoomIn" : "slideInLeft"
                    }
                    animationInDuration={1500}
                  >
                    <ContactFormWrapper>
                      <ContactForm />
                    </ContactFormWrapper>
                  </AnimatedOnScroll>
                </Element>
              </>
            }
          />
          <Route
            path="/design"
            element={
              <>
                <Design />
              </>
            }
          />
          <Route
            path="/webDev"
            element={
              <>
                <Web />
              </>
            }
          />
          <Route
            path="/webPosition"
            element={
              <>
                <WebPosition />
              </>
            }
          />
          <Route
            path="/fullPackage"
            element={
              <>
                <Package />
              </>
            }
          />
          <Route
            path="/offer"
            element={
              <NegativeTop>
              <Container>
              
                <Offer/>
               
              </Container>
              </NegativeTop>
            }
          />
          <Route
            path="/whyUs"
            element={
              <>
                <Container>
                  {" "}
                  <WhyUs
                    title={"Dowiedz się, co możemy dla Ciebie zrobić ! 🛠️"}
                    content={skillsList}
                  />
                </Container>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              // <NegativeMarginTop>
              //   <Container>
              //     <SubpageWrapper2>
               <NegativeMarginTop>
                  <ContactFormWrapper>
                    <ContactForm />
                    </ContactFormWrapper>
                     </NegativeMarginTop>
              //     </SubpageWrapper2>
              //    </Container>
              // </NegativeMarginTop>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <>
                <Container>
                  <SubpageWrapper>
                    <Cast selectedCast={cast} />
                  </SubpageWrapper>
                </Container>
               
              </>
            }
          />
          <Route
            path="/privacyPolicy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
          <Route
           path="*"
            element={
              <>
                <NoResult />
              </>
            }
          />
        </Routes>
        <Footer />
        <CookieBar />
        <ScrollToTop
          component={<MySVG />}
          style={{
            background: "none",
            boxShadow: "none",
            transform: "rotate(180deg)",
            width: "48px",
            fill: "var(--arrow-color, #3498db)",
            right: "15px",
          }}
        />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

// hinge - przyda sie , zepsuty i spada

// nowe podejście -  w czasie ifloading wyswietlaj całą stronę w danym kolorze a potem będzie się pooli cubic bezier wyswietlac cała strona,
// czyli cały app.js dac w container który pojawia się w cubic bezier. (lub pojedynczo kazdy container,
//po prostu dac effect animacji cubic bezier i tyle, natomiast na ifloading całą stronę zastąpić razem z navbar jednokolorowym tłem/banerem)

// 1. blog (reaact blog biblioteka) 2. polityka prywatności (generator polityki) 3. cookies (biblioteka react) 4. oferta - naprawic przyciski do oferty i dodac tresc ofert
