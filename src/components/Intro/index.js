import {
  IntroBlock,
  MyPhoto,
  ModeChange,
  Text,
  Name,
  Div,
  Article,
  HireMeButton,
  IconBody,
  Body,
  DarkMode,
  StyledButtonImg,
  StyledSunIcon,
  ArrowDown,
} from "./styled";
import dragonLight from "../../images/me2.svg";
import dragonDark from "../../images/me.svg";
import text from "../../images/logo-01.webp";
import textDark from "../../images/logo2.png";
import arrowDown from "../../images/arrowDown.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../features/DataSlice/githubSlice";
import { selectIsLightMode } from "../../features/DataSlice/githubSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectPortfolioList,
  selectLoadingState,
} from "../../features/DataSlice/githubSlice";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

function AboutMe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(selectIsLightMode);
  const ifLoading = useSelector(selectLoadingState);

  useEffect(() => {
    dispatch(fetchGithubData());
  }, []);

  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = <LoadingPage />;
      break;
    case "success":
      returned = (
        <>
          <IntroBlock>
            <MyPhoto
              src={theme ? dragonLight : dragonDark}
              alt="My Photo"
              themes={theme}
            />
{/* Jesteśmy pasjonatami i jesteśmy po to, by pomóc Ci stworzyć kompletną    identyfikację wizualną Twojej firmy. */}
            {/* <ModeChange><DarkMode>DARK MODE {theme === false ? "ON" : "OFF"}</DarkMode><IconBody onClick={() => dispatch(changeTheme())}><Body><StyledSunIcon $themes={theme}/></Body></IconBody></ModeChange> */}
            <Text>TO JEST</Text>
            <Name src={theme === false ? textDark : text} />
            {/* DragonScape</Name>  */}
            <Article>
          Design, logo, banery, wizytówki, a nawet projektowanie i tworzenie stron internetowych – to nasza specjalność! W smoczej krainie tworzymy rozwiązania, które pomogą Tobie stać się smokiem biznesu! Sprawdź co dla Ciebie przygotowaliśmy !
            </Article>
            <HireMeButton href="mailto:kontakt@dragonscape.pl">
              <StyledButtonImg />
            </HireMeButton>
          </IntroBlock>
          <Link
            activeClass="active"
            to="WhyUsSection"
            spy={true}
            smooth={false}
            offset={-190}
            duration={850}
          >
            <ArrowDown src={arrowDown}></ArrowDown>
          </Link>
        </>
      );
      break;
    case "error":
      returned = <ErrorPage />;
      break;
    default:
      returned = <LoadingPage />;
  }

  return returned;
}

export default AboutMe;

// const dispatch = useDispatch();
//   const portfolioList = useSelector(selectPortfolioList);
//   const ifLoading = useSelector(selectLoadingState);

//   useEffect(() => {
//     dispatch(fetchGithubData());
//   }, []);

//   let returned = "";

//   switch (ifLoading) {
//     case "loading":
//       returned = (
// <LoadingPage/>
//       );
//       break;
//     case "success":
//       returned = (
//         <>
//          <Offer projects={OfferList}/>
//      {/* <Projects projects={portfolioList}/> */}
//      </>
//       );
//       break;
//       case "error":
//         returned = (
//           <ErrorPage/>
//         );
//         break;
//     default:
//       returned = (
//         <LoadingPage/>
//       );
//   }

//   return returned;

// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const oscillateAnimation = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-20px);
//   }
// `;

// const OscillatingObject = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #3498db;
//   border-radius: 50%;
//   animation: ${oscillateAnimation} 2s ease-in-out infinite;
// `;

// const App = () => {
//   return (
//     <div>
//       <OscillatingObject />
//     </div>
//   );
// };

// export default App;
