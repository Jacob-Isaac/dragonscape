import { Container } from "../../../../styledComponents/Container/styled";
import { HeaderCustom } from "../../../../styled";
import Image1 from "../../../../images/dragonsCapeSecond.webp";
import Image2 from "../../../../images/dragonsCape.webp";
import Advertise from "../../../../images/advertise-01.svg";
import Price from "../../Pricing";
import {
  ImageTextWrapper,
  TextWrapper,
  Image,
  Button,
  ImageMobile,
  AdMobile,
  AdMobileSecond,
  LetterPaperContainer,
  Badge,
  Figure,
  FigureMobile,
  Figcaption,
  RollerWrapper,
  Position
} from "../styled";
import { SmoothWrapper } from "../../../../styledComponents/Wrapper/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../../../features/DataSlice/githubSlice";
import { useEffect, useState } from "react";
import {
  fetchGithubData,
  selectLoadingState,
  setDesign,
  selectDesign,
} from "../../../../features/DataSlice/githubSlice";
import LoadingPage from "../../../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../../../features/TechnicalTabs/ErrorPage";
import { Link } from "../../../../styledComponents/Tiles/styled";
import designbadge from "../../../../images/designTopImage.webp";

const Design = () => {
  const dispatch = useDispatch();
  const ifLoading = useSelector(selectLoadingState);
  const [isContentVisibleArray, setIsContentVisibleArray] = useState([
    false,
    false,
    false,
  ]);

  // Toggle visibility for a specific component
  const toggleContentVisibility = (index) => {
    setIsContentVisibleArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  useEffect(() => {
    dispatch(fetchGithubData());
    dispatch(setDesign());
  }, []);
  const route = useSelector(selectDesign);
  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = <LoadingPage />;
      break;
    case "success":
      returned = (
        <Container>
          <ImageTextWrapper>
            <Badge src={designbadge} />
            <TextWrapper>
              <HeaderCustom>
                Identyfikacja wizualna
              </HeaderCustom>
              <br />
              <SmoothWrapper>
                <h2>
                  Dragon <b>s</b>cape czy Dragon<b>s</b> cape?
                </h2>
                Gdy próbujesz zdecydować się na identyfikację wizualną Twojej
                marki musisz stanąć przed wieloma wyborami. Czasem drobne
                różnice mogą zmienić wszystko o 180 stopni. Dlatego jesteśmy
                tutaj, by pomóc Ci w tym trudnym zadaniu i stworzyć design
                jakiego potrzebuje Twoja firma.
              </SmoothWrapper>
              <FigureMobile>
                <Image src={Image1} alt="Dragons Cape" />
                {/* <Figcaption>"Dragons Cape"</Figcaption> */}
              </FigureMobile>
              <SmoothWrapper>
                <h2>Indywidualne Logo</h2>
                Stworzymy dla Ciebie unikalne logo, które będzie wizytówką
                Twojej marki. Nasz proces projektowy opiera się na zrozumieniu
                Twojej firmy, jej wartości i celów, aby wyróżnić Cię spośród
                konkurencji.
                <h2>Kreatywne Banery i Grafiki</h2>
                Przygotujemy nie tylko logo, ale również banery, grafiki, oraz
                projekty wizytówek i materiałów reklamowych, które przyciągną
                uwagę Twoich klientów. Dzięki kreatywności i zrozumieniu trendów
                projektowych, stworzymy materiały, które wyróżnią Twoją markę.
              </SmoothWrapper>{" "}
            
              <FigureMobile>
                <Image src={Image2} alt="Dragons Cape" />
                <Figcaption>"Dragons Cape"</Figcaption>
              </FigureMobile>
            
              <SmoothWrapper>
                <h2>Pozwól Wyrazić Tożsamość Twojej Marki</h2>
                Nasze usługi personalizacji graficznej stron www pozwolą Twojej
                witrynie internetowej mówić za Ciebie. Tworzymy spersonalizowane
                rozwiązania, które zapewniają optymalne doświadczenia
                użytkownikom. Dopasowana kolorystyka i typografia nadadzą
                spójności twojej marce.
                <p>
                  Niech Twoja marka wyróżnia się w tłumie! Skontaktuj się z nami
                  już dziś, abyśmy mogli zacząć budować wyjątkową tożsamość
                  wizualną dla Twojego biznesu.
                </p>
              </SmoothWrapper>
              <Link to="/contact">Napisz do nas!</Link>
            </TextWrapper>
            <Figure>
              <Image src={Image1} alt="Dragons Cape" />
              <figcaption>"Dragons Cape"</figcaption>
            </Figure>
          </ImageTextWrapper>

          <ImageTextWrapper>
              <Position>
            <Figure>
              <Image src={Image2} alt="Dragon Scape" />
              <figcaption>"Dragon Scape"</figcaption>
            </Figure>
            </Position>
            <TextWrapper>
              <SmoothWrapper>
                {/* <LetterPaperContainer> */}
                {/* <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "10px",
                  }}
                >
                  <h3 style={{ alignSelf: "flex-end" }}>Letter from </h3>
                  <h2 style={{ paddingBottom: "1.1px" }}> Jakub Nowakowski</h2>
                </div>
                <p style={{ fontSize: "14px", marginTop: "-13px" }}>
                  CEO Dragonscape 😎
                </p>  */}
                <h2>Jak wygląda proces tworzenia ? </h2>
                Zaczynamy od briefu, czyli zapytamy Ciebie np. o twoją markę,
                branżę, grupę docelową i to co chcesz osiągnąć. Po ustaleniu
                Twoich potrzeb wyślemy fakturę pro forma i zabierzemy się do
                pracy!
                <br />
                <br />
                Następnym elementem jest warsztat kreatywny, tzw. moodboard.
                Zaprezentujemy Tobie przykładową stylistykę logo lub całej
                identyfikacji graficznej w zależności od pakietu który
                wybierzesz. Projekt, który najbardziej będzię Tobie odpowiadał
                zostanie oszlifowany jak diament, po czym przedstawimy Ci
                wstępną koncepcję - gotowe propozycje.
                <br /> <br />
                To od Ciebie zależy, w którą stronę idziemy! Na każdym etapie
                możesz zdecydować się na wdrożenie poprawek do projektu. Dopiero
                po wypracowaniu satysfakcjonującego rezultatu przygotowujemy
                finalne logo, lub inne elementy pełnej identyfikacji wizualnej,
                w tym księgę znaku. <br />
                <br />
                Chcesz dokonać odpowiedniego wyboru? Skontaktuj się z nami już
                dziś, abyśmy mogli omówić, jak możemy pomóc w wizualnym
                wyrażeniu Twojej marki!
              </SmoothWrapper>
              <RollerWrapper>
                <SmoothWrapper>
                  <strong
                    onClick={() => toggleContentVisibility(0)}
                    style={{ cursor: "pointer" }}
                  >
                    {isContentVisibleArray[0] ? "▼" : "►"} Czym jest księga
                    znaku?
                  </strong>

                  {isContentVisibleArray[0] && (
                    <>
                      <br /> <br />
                      <p>
                        Księga znaku, to nic innego, jak instrukcja obsługi
                        logo, stworzona przez autora po to, by ułatwić
                        prawidłowe używanie go przez inne osoby. Określa, którą
                        wersję logo stosować w konkretnych syutacjach, np. na
                        ciemnym tle, jaka jest kolorystyka logo, jego minimalne
                        rozmiary, oraz jak i kiedy nie korzystać z logo lub
                        jakie są niedozwolone modyfikacje. Ma to na celu
                        zachowanie czytelności i spójności identyfikacji
                        wizualnej w każdej sytuacji.{" "}
                      </p>
                    </>
                  )}
                </SmoothWrapper>
                <SmoothWrapper>
                  <strong
                    onClick={() => toggleContentVisibility(1)}
                    style={{ cursor: "pointer" }}
                  >
                    {isContentVisibleArray[1] ? "▼" : "►"} Co dalej?
                  </strong>

                  {isContentVisibleArray[1] && (
                    <>
                      {" "}
                      <br />
                      <br />
                      Ostatni etap naszej podróży to opłacenie faktury końcowej,
                      po której następuje przekazanie Tobie praw do logo i
                      innych projektów i plików. Po tym etapie masz już wszystko
                      w swoich rękach!
                    </>
                  )}
                </SmoothWrapper>
                <SmoothWrapper>
                  <strong
                    onClick={() => toggleContentVisibility(2)}
                    style={{ cursor: "pointer" }}
                  >
                    {isContentVisibleArray[2] ? "▼" : "►"} "Czy mnie na to
                    stać"?
                  </strong>

                  {isContentVisibleArray[2] && (
                    <>
                      <br />
                      <br /> Odpowiemy przewrotnie : nie stać Cię na to by NIE
                      posiadać nowoczesnego i spójnego logo! Błędna komunikacja
                      wizualna odpowiada za większość porażek w próbach
                      przyciągnięcia nowych klientów. Gdy chcesz stworzyć
                      luksusową markę z niechlujnym logiem pozbawiasz się połowy
                      potencjalnych klientów, to samo działa w drugą stronę:
                      przyjazna i otwarta firma to nie miejsce na posępny,
                      oficjalny design!
                    </>
                  )}
                  {/* </LetterPaperContainer> */}
                </SmoothWrapper>
              </RollerWrapper>
            </TextWrapper>
          </ImageTextWrapper>
          <AdMobile src={Advertise} />
          <AdMobileSecond />
          <Price route={route} />
        </Container>
      );
      break;
    case "error":
      returned = <ErrorPage />;
      break;
    default:
      returned = <LoadingPage />;
  }

  return returned;
};

export default Design;
