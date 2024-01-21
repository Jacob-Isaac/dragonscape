import Image1 from "../../../../images/webOfferDragon.svg";
import Image2 from "../../../../images/webOfferDragonSecond.png";
import Price from "../../Pricing";
import { ImageTextWrapper, TextWrapper, Image, Button, SmoothWrapper  } from "../styled";
import { HeaderCustom } from "../../../../styled";
import { Container } from "../../../../styledComponents/Container/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../../../features/DataSlice/githubSlice";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState} from "../../../../features/DataSlice/githubSlice";
import LoadingPage from "../../../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../../../features/TechnicalTabs/ErrorPage";
import { Link } from "../../../../styledComponents/Tiles/styled";

const Web = () => {
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
    <Image src={Image1} alt="Dragons Cape" />
      <TextWrapper>
      <SmoothWrapper>
      <HeaderCustom>Tworzenie stron internetowych</HeaderCustom>
        <p>
         Czy chcesz wyróżnić się w gąszczu internetowej konkurencji? Marzysz o
          stronie, która nie tylko przyciąga uwagę, ale również konwertuje
          odwiedzających w lojalnych klientów? Projektowanie stron internetowych
          to nasza pasja i umiejętność, która przekształca Twoje wizje w
          rzeczywistość.
        </p>
        <p>
          <br/><h2>Spersonalizowany Design</h2> Każda strona, którą
          projektujemy, to efekt dogłębnego zrozumienia Twojej marki. Tworzymy
          spersonalizowane, estetyczne projekty, które oddają esencję Twojego
          biznesu.
          <br /><br/>
          <h2>Responsywność i Wysoka Wydajność</h2> W dobie
          różnorodności urządzeń, zapewniamy responsywne strony internetowe,
          które prezentują się doskonale na każdym ekranie. Nasze rozwiązania są
          szybkie i zoptymalizowane pod kątem wydajności.
          <br /><br></br>
          <h2>SEO: Optymalizacja</h2> Twoja strona nie tylko ma wyglądać
          dobrze, ale także być widoczna dla Twojej docelowej grupy odbiorców.
          Nasze podejście do projektowania stron uwzględnia optymalizację pod
          kątem wyszukiwarek, co pomaga w osiągnięciu wyższej pozycji w wynikach
          wyszukiwania.
          <br /><br/></p>
          </SmoothWrapper>
          <Link to="/contact">Napisz do nas!</Link>
      </TextWrapper>
  
    </ImageTextWrapper>
    <ImageTextWrapper>
      <Image src={Image2} alt="Dragon Scape" />
      <TextWrapper>
      <SmoothWrapper>
        <p>
        <HeaderCustom>Dlaczego my?</HeaderCustom>
          <br />
          <strong>Doświadczenie i Pasja:</strong> Nasze doświadczenie w
          projektowaniu stron internetowych to lata praktyki i setki
          zadowolonych klientów. Pasja do tworzenia funkcjonalnych, estetycznych
          stron jest w naszym DNA.
          <br />
          <strong>Indywidualne Podejście:</strong> Nie ma dwóch identycznych
          projektów. Stawiamy na spersonalizowane podejście do każdego klienta,
          starając się zrozumieć i oddać wizję biznesową.
          <br />
          <strong>Skuteczność i Rezultaty:</strong> Nasze projekty nie tylko
          wyglądają świetnie, ale przynoszą konkretne rezultaty. Dzięki
          optymalizacji SEO i funkcjonalnościom, zwiększamy ruch na stronie oraz
          konwersje.
          <br />
          Gotowy na wyjątkową obecność online dla Twojego biznesu? Skontaktuj
          się z nami już dziś, a razem stworzymy stronę internetową, która
          zapiera dech w piersiach i przyciągnie uwagę Twoich potencjalnych
          klientów.
        </p>
        <p>
          Z poważaniem, <br />
          [Zespół Twojej Firmy Projektowej Stron Internetowych]
        </p><p>Napisz do nas lub poszukaj więcej informacji na:</p>
        </SmoothWrapper>
      </TextWrapper>
    </ImageTextWrapper>
    <p>TO ZALEŻY...</p>
    
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