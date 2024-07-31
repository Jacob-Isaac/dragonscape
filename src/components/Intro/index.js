import {
  IntroBlock,
  MyPhoto,
  Text,
  Name,
  Article,
  HireMeButton,
  StyledButtonImg,
  ArrowDown,
} from "./styled";
import dragonLight from "../../images/meLight.svg";
import dragonDark from "../../images/meDark.svg";
import text from "../../images/logoForBright.webp";
import textDark from "../../images/logoForDark.webp";
import arrowDown from "../../images/arrowDown.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../features/DataSlice/dataSlice";
import { Link } from "react-scroll";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
} from "../../features/DataSlice/dataSlice";
import LoadingPage from "../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../features/TechnicalTabs/ErrorPage";
import { toggleBodyOverflowToFalse } from "../../features/DataSlice/dataSlice";

function AboutMe() {
  const dispatch = useDispatch();
  const theme = useSelector(selectIsLightMode);
  const ifLoading = useSelector(selectLoadingState);

  useEffect(() => {
    dispatch(fetchGithubData());
    dispatch(toggleBodyOverflowToFalse());
  }, []);

  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = <LoadingPage/>;
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
            <Text>TO JEST</Text>
            <Name src={theme ? text : textDark} />
            <Article>
              Design, logo, banery, wizytówki, a nawet projektowanie i tworzenie
              stron internetowych – to nasza specjalność! W smoczej krainie
              tworzymy rozwiązania,  które pomogą Tobie stać się smokiem biznesu!
              Sprawdź co dla Ciebie przygotowaliśmy !
            </Article>
            <HireMeButton 
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={false}
            offset={160}
            duration={850}>
              <StyledButtonImg />
            </HireMeButton>
          </IntroBlock>
          <Link
            activeClass="active"
            to="VideoSection"
            spy={true}
            smooth={false}
            offset={-140}
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
      returned = <LoadingPage/>;
  }

  return returned;
}

export default AboutMe;
