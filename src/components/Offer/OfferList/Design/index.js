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
  SmoothWrapper,
  LetterPaperContainer,
} from "../styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../../../features/DataSlice/githubSlice";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
} from "../../../../features/DataSlice/githubSlice";
import LoadingPage from "../../../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../../../features/TechnicalTabs/ErrorPage";

const Design = () => {
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
        <Container>
          <ImageTextWrapper>
            <TextWrapper>
              <HeaderCustom>
                Identyfikacja wizualna
                {/* Personalizacja
          Graficzna Stron www */}
              </HeaderCustom>
              <SmoothWrapper>
                <h2>
                  Dragon <b>s</b>cape czy Dragon<b>s</b> cape?
                </h2>
                <br />
                Gdy próbujesz zdecydować się na identyfikację wizualną Twojej
                marki musisz stanąć przed wieloma wyborami. Czasem drobne
                różnice mogą zmienić wszystko o 180 stopni. Dlatego jesteśmy
                tutaj, by pomóc Ci w tym trudnym zadaniu i stworzyć design
                jakiego potrzebuje Twoja firma.
                <h2>Niezapomniane Logo</h2>
                <br />
                Stworzymy dla Ciebie unikalne logo, które będzie wizytówką
                Twojej marki. Nasz proces projektowy opiera się na głębokim
                zrozumieniu Twojej firmy, jej wartości i celów, aby stworzyć
                logo, które wyróżni Cię spośród konkurencji.
                <h2>Kreatywne Banery i Grafiki</h2>
                <br />
                Nasz utalentowany team może przygotować nie tylko logo, ale
                również banery, grafiki, oraz projekty wizytówek i materiałów
                reklamowych, które przyciągną uwagę Twoich klientów. Dzięki
                kreatywności i zrozumieniu trendów projektowych, stworzymy
                materiały, które wyróżnią Twoją markę w każdym miejscu.
                <h2>
                  Pozwól Twojej Stronie WWW Wyrazić Tożsamość Twojej Marki
                </h2>
                <br />
                Nasze usługi personalizacji graficznej stron www pozwolą Twojej
                witrynie internetowej mówić za Ciebie. Tworzymy spersonalizowane
                rozwiązania, które zapewniają optymalne doświadczenia
                użytkownikom. Dopasowana kolorystyka i typografia nadadzą
                spójności twojej marce.
                <p>
                  <strong>Dlaczego My</strong>
                  <br />
                  ✔️ Indywidualne podejście: Tworzymy unikalne rozwiązania
                  dopasowane do Twoich potrzeb.
                  <br />
                  ✔️ Kreatywność i profesjonalizm: Nasz zespół łączy
                  innowacyjność z doświadczeniem.
                  <br />
                  ✔️ Skuteczne rezultaty: Nasze projekty przekładają się na
                  sukces biznesowy klientów.
                  <br />
                </p>
                <p>
                  Niech Twoja marka wyróżnia się w tłumie! Skontaktuj się z nami
                  już dziś, abyśmy mogli zacząć budować wyjątkową tożsamość
                  wizualną dla Twojego biznesu.
                </p>
              </SmoothWrapper>
              <Button>Napisz do nas!</Button>
            </TextWrapper>
            <figure>
              <Image src={Image1} alt="Dragons Cape" />
              <figcaption>"Dragons Cape"</figcaption>
            </figure>
          </ImageTextWrapper>

          <ImageTextWrapper>
            <figure>
              <Image src={Image2} alt="Dragon Scape" />
              <figcaption>"Dragon Scape"</figcaption>
            </figure>
            <TextWrapper>
              <SmoothWrapper>
                {/* <LetterPaperContainer> */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3 style={{ alignSelf: "flex-end" }}>Letter from</h3>
                  <h1 style={{ paddingTop: "10px" }}>Jakub Nowakowski</h1>
                </div>
                <h3>CEO Dragonscape</h3>
                <br />
                Witaj!
                <br />
                <p>
                  W dzisiejszym konkurencyjnym świecie biznesowym wyjątkowa
                  identyfikacja wizualna to kluczowy element, który wyróżnia
                  markę spośród innych. Dlatego oferujemy kompleksowe i
                  spersonalizowane usługi tworzenia logo, banerów, grafik,
                  obrazków oraz personalizacji graficznej stron internetowych,
                  aby pomóc Twojej marce osiągnąć niezapomniany wizerunek.
                </p>
                <p>
                  <strong>Jak wygląda ten proces ? </strong>
                  <br />
                  Zaczynamy od briefu, czyli zapytamy Ciebie np. o twoją markę,
                  branżę, grupę docelową i to co chcesz osiągnąć. Po ustaleniu
                  Twoich potrzeb wyślemy fakturę pro forma i zabierzemy się do
                  pracy!
                  {/*
          tworzyć unikatowe logotypy, które idealnie odzwierciedlają wartości i
          charakter Twojego biznesu. */}
                  <br />
                  Następnym elementem jest warsztat kreatywny, tzw. moodboard.
                  Zaprezentujemy Tobie przykładową stylistykę logo lub całej
                  identyfikacji graficznej w zależności od pakietu który
                  wybierzesz. Projekt, który najbardziej będzię Tobie odpowiadał
                  zostanie oszlifowany jak diament, po czym przedstawimy Ci
                  wstępną koncepcję - gotowe propozycje.
                  <br />
                  To od Ciebie zależy, w którą stronę idziemy! Na każdym etapie
                  możesz zdecydować się na wdrożenie poprawek do projektu.
                  Dopiero po wypracowaniu satysfakcjonującego rezultatu
                  przygotowujemy finalne logo, lub inne elementy pełnej
                  identyfikacji wizualnej, w tym księgę znaku.
                </p>
                <p>
                  <strong>Czym jest księga znaku?</strong>
                  <br />
                  Księga znaku, to nic innego, jak instrukcja obsługi logo,
                  stworzona przez autora po to, by ułatwić prawidłowe używanie
                  go przez inne osoby. Określa, którą wersję logo stosować w
                  konkretnych syutacjach, np. na ciemnym tle, jaka jest
                  kolorystyka logo, jego minimalne rozmiary, oraz jak i kiedy
                  nie korzystać z logo lub jakie są niedozwolone modyfikacje. Ma
                  to na celu zachowanie czytelności i spójności identyfikacji
                  wizualnej w każdej sytuacji.
                  <br />
                  <strong>Co dalej?</strong>
                  Ostatni etap naszej podróży to opłacenie faktury końcowej, po
                  której następuje przkazanie Tobie praw do logo i innych
                  projektów i plików. Po tym etapie masz już wszystko w swoich
                  rękach!
                  <strong>
                    Zadajesz sobie pytanie, "czy mnie na to stać"?
                  </strong>
                  <br /> Odpowiem przewrotnie : nie stać Cię na to by NIE
                  posiadać nowoczesnego i spójnego logo! Błędna komunikacja
                  wizualna odpowiada za większość porażek w próbach
                  przyciągnięcia nowych klientów. Gdy chcesz stworzyć luksusową
                  markę z niechlujnym logiem pozbawiasz się połowy potencjalnych
                  klientów, to samo działa w drugą stronę: przyjazna i otwarta firma to nie miejsce na posępny, oficjalny design!
                  <br />
                  Chcesz dokonać odpowiedniego wyboru? Skontaktuj się z nami już dziś, abyśmy mogli omówić,
                  jak możemy pomóc w wizualnym wyrażeniu Twojej marki.
                  <br />
                  Pozdrawiamy,
                  <br />
                  <br />
                  [Zespół Dragonscape]
                </p>
                {/* </LetterPaperContainer> */}
              </SmoothWrapper>
            </TextWrapper>
          </ImageTextWrapper>
          <AdMobile src={Advertise} />
          <AdMobileSecond />
          <Price />
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
