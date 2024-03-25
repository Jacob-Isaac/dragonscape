import imageOne from "../../../../images/webOfferDragon.svg";
import imageTwo from "../../../../images/webOfferDragonSecond.webp";
import imageOneForDark from "../../../../images/webOfferDragonForDark.svg";
import imageTwoForDark from "../../../../images/webOfferDragonSecondForDark.webp";
import Price from "../../Pricing";
import {
  ImageTextWrapper,
  TextWrapper,
  Image,
  Button,
  PromujImg,
  Badge
} from "../styled";
import { SmoothWrapper } from "../../../../styledComponents/Wrapper/styled";
import { HeaderCustom } from "../../../../styled";
import { Container } from "../../../../styledComponents/Container/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../../../features/DataSlice/dataSlice";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
  setWeb,
  selectWeb
} from "../../../../features/DataSlice/dataSlice";
import LoadingPage from "../../../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../../../features/TechnicalTabs/ErrorPage";
import { Link } from "../../../../styledComponents/Tiles/styled";
import promujSiebie from "../../../../images/promujSiebie.webp";
import promujSiebieForDark from "../../../../images/promujSiebieForDark.webp";
import webbadge from "../../../../images/webTopImage.png";
import webbadgeForDark from "../../../../images/webTopImageDark.webp";

const Web = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectIsLightMode);
  const ifLoading = useSelector(selectLoadingState);
 

  useEffect(() => {
    dispatch(fetchGithubData());
    dispatch(setWeb());
  }, []);

  const route = useSelector(selectWeb);
  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = <LoadingPage/>;
      break;
    case "success":
      returned = (
        <Container>
          <ImageTextWrapper>
          <Badge src={theme ? webbadge : webbadgeForDark} />
            <TextWrapper>
            <HeaderCustom>Tworzenie stron internetowych</HeaderCustom><br/>
              <SmoothWrapper>
              
               
                <h2>Czy chcesz się wyróżnić?</h2>
                <p>
                  W gąszczu internetowej konkurencji marzysz o stronie, która nie tylko przyciąga uwagę, ale
                  również konwertuje odwiedzających w lojalnych klientów?
                  Projektowanie stron internetowych to nasza pasja i
                  umiejętność, która przekształca Twoje wizje w rzeczywistość.
                </p>
                </SmoothWrapper>
                <SmoothWrapper>
              
                  <h2>Spersonalizowany Design</h2>  Każda strona, którą
                  projektujemy, to efekt dogłębnego zrozumienia Twojej marki.
                  Tworzymy spersonalizowane, estetyczne projekty, które oddają
                  esencję Twojego biznesu.
                  <br />
                  <br />
                  <h2>Responsywność i Wysoka Wydajność</h2> W dobie
                  różnorodności urządzeń, zapewniamy responsywne strony
                  internetowe, które prezentują się doskonale na każdym ekranie.
                  Nasze rozwiązania są szybkie i zoptymalizowane pod kątem
                  wydajności.
                  <br />
                  <br></br>
                  <h2>SEO: Optymalizacja</h2> Twoja strona nie tylko ma wyglądać
                  dobrze, ale także być widoczna dla Twojej docelowej grupy
                  odbiorców. Nasze podejście do projektowania stron uwzględnia
                  optymalizację pod kątem wyszukiwarek, co pomaga w osiągnięciu
                  wyższej pozycji w wynikach wyszukiwania.
                 
              
                </SmoothWrapper>
              <Link to="/contact">Napisz do nas!</Link>
            </TextWrapper>
            <Image src={theme ? imageOne : imageOneForDark} alt="Dragons Cape" />
          </ImageTextWrapper>
          <ImageTextWrapper>
            <TextWrapper>
              <div style={{ marginBottom:"-100px" }}></div>
            <HeaderCustom>Dlaczego my ?</HeaderCustom><br/>
              <SmoothWrapper>
               
                  <h2>Doświadczenie i Pasja:</h2> Nasze doświadczenie wyniesione z różnych branż to lata praktyki i setki
                  zadowolonych klientów. Pasja do tworzenia funkcjonalnych,
                  estetycznych stron jest w naszym DNA.
                  <h2>Indywidualne Podejście:</h2> Nie ma dwóch
                  identycznych projektów. Stawiamy na spersonalizowane podejście
                  do każdego klienta, starając się zrozumieć i oddać wizję
                  biznesową.   </SmoothWrapper><SmoothWrapper>
                  <h2>Ile to kosztuje? </h2>Jeden Rabin powie dużo,
                  drugi mało. Mądry smok powie: To zależy! W dzisiejszych
                  czasach strona internetowa jest podstawą działania każdego
                  biznesu. Jej brak to jak założenie sklepu
                  modowego w środku lasu, zamiast w centrum Mediolanu.
                  Niechlujna lub przestarzała strona www, to zaledwie
                  postawienie znaku przy drodze: "skręć w las, a odkryjesz nasz
                  sklep". Coś tu nie gra prawda? Nasze ceny są atrakcyjne i
                  zaczynają się już od 700 zł i to od Ciebie zależy, który pakiet wybierzesz.
                  <br /><br/>
                  Gotowy na wyjątkową obecność online dla Twojego biznesu?
                  Skontaktuj się z nami już dziś, a razem stworzymy stronę
                  internetową, która zapiera dech w piersiach i przyciągnie
                  uwagę Twoich potencjalnych klientów.
               
                <p>Napisz do nas lub poszukaj więcej informacji na:</p>
                <a href="https://www.promujsiebie.pl" target="_blank"><PromujImg src={theme ? promujSiebie : promujSiebieForDark} /></a>
                </SmoothWrapper>
            </TextWrapper>
            <Image src={theme ? imageTwo : imageTwoForDark}  alt="Dragon Scape" />
          </ImageTextWrapper>

          <Price route={route}/>
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
export default Web;
