import Image1 from "../../../../images/webOfferDragon.svg";
import Image2 from "../../../../images/webOfferDragonSecond.png";
import Price from "../../Pricing";
import {
  ImageTextWrapper,
  TextWrapper,
  Image,
  Button,
  SmoothWrapper,
  PromujImg
} from "../styled";
import { HeaderCustom } from "../../../../styled";
import { Container } from "../../../../styledComponents/Container/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../../../features/DataSlice/githubSlice";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
} from "../../../../features/DataSlice/githubSlice";
import LoadingPage from "../../../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../../../features/TechnicalTabs/ErrorPage";
import { Link } from "../../../../styledComponents/Tiles/styled";
import promujSiebie from "../../../../images/promujSiebie.webp";

const Web = () => {
  const dispatch = useDispatch();
 
  const ifLoading = useSelector(selectLoadingState);

  useEffect(() => {
    dispatch(fetchGithubData());
  }, []);

  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = <LoadingPage/>;
      break;
    case "success":
      returned = (
        <Container>
          <ImageTextWrapper>
            
            <TextWrapper>
              <SmoothWrapper>
                <HeaderCustom>Tworzenie stron internetowych</HeaderCustom>
                <br/>
                <p>
                  Czy chcesz wyróżnić się w gąszczu internetowej konkurencji?
                  Marzysz o stronie, która nie tylko przyciąga uwagę, ale
                  również konwertuje odwiedzających w lojalnych klientów?
                  Projektowanie stron internetowych to nasza pasja i
                  umiejętność, która przekształca Twoje wizje w rzeczywistość.
                </p>
                <p>
                  <br />
                  <h2>Spersonalizowany Design</h2> Każda strona, którą
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
                  <br />
                  <br />
                </p>
              </SmoothWrapper>
              <Link to="/contact">Napisz do nas!</Link>
            </TextWrapper>
            <Image src={Image1} alt="Dragons Cape" />
          </ImageTextWrapper>
          <ImageTextWrapper>
           
            <TextWrapper>
              <SmoothWrapper>
                <p>
                  <HeaderCustom>Dlaczego my?</HeaderCustom>
                  <br/>
                  <h2>Doświadczenie i Pasja:</h2> Nasze doświadczenie wyniesione z różnych branż to lata praktyki i setki
                  zadowolonych klientów. Pasja do tworzenia funkcjonalnych,
                  estetycznych stron jest w naszym DNA.
                  <h2>Indywidualne Podejście:</h2> Nie ma dwóch
                  identycznych projektów. Stawiamy na spersonalizowane podejście
                  do każdego klienta, starając się zrozumieć i oddać wizję
                  biznesową.
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
                </p>
                <p>Napisz do nas lub poszukaj więcej informacji na:</p>
                <a href="https://www.promujsiebie.pl" target="_blank"><PromujImg src={promujSiebie}/></a>
              </SmoothWrapper>
            </TextWrapper>
            <Image src={Image2} alt="Dragon Scape" />
          </ImageTextWrapper>

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
export default Web;
