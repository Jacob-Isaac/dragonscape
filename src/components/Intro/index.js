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
import text from "../../images/logoWebp.webp";
import textDark from "../../images/logoDark.png";
import arrowDown from "../../images/arrowDown.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../features/DataSlice/githubSlice";
import { Link } from "react-scroll";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
} from "../../features/DataSlice/githubSlice";
import LoadingPage from "../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../features/TechnicalTabs/ErrorPage";

function AboutMe() {
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
            <Text>TO JEST</Text>
            <Name src={theme === false ? textDark : text} />
            <Article>
              Design, logo, banery, wizytówki, a nawet projektowanie i tworzenie
              stron internetowych – to nasza specjalność! W smoczej krainie
              tworzymy rozwiązania, które pomogą Tobie stać się smokiem biznesu!
              Sprawdź co dla Ciebie przygotowaliśmy !
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
