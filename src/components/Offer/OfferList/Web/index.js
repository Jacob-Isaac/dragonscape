import { Container } from "../../../../styledComponents/Container/styled";
import Image1 from "../../../../images/webOfferDragon.svg";
import Image2 from "../../../../images/webOfferDragonSecond.png";
import Price from "../../Pricing";
import { ImageTextWrapper, TextWrapper, Image, Button  } from "../styled";
import { HeaderCustom } from "../../../../styled";

const Web = () => (
  <Container>
    <ImageTextWrapper>
      <TextWrapper>
        <HeaderCustom>Tworzenie stron internetowych</HeaderCustom>
        <p>
          Niezwykła Obecność Online: Twoja Unikatowa Strona Internetowa. Czy
          chcesz wyróżnić się w gąszczu internetowej konkurencji? Marzysz o
          stronie, która nie tylko przyciąga uwagę, ale również konwertuje
          odwiedzających w lojalnych klientów? Projektowanie stron internetowych
          to nasza pasja i umiejętność, która przekształca Twoje wizje w
          rzeczywistość.
        </p>
        <p>
          <strong>Nasze Unikalne podejście:</strong>
          <br />
          <strong>Spersonalizowany Design:</strong> Każda strona, którą
          projektujemy, to efekt dogłębnego zrozumienia Twojej marki. Tworzymy
          spersonalizowane, estetyczne projekty, które oddają esencję Twojego
          biznesu.
          <br />
          <strong>Responsywność i Wysoka Wydajność:</strong> W dobie
          różnorodności urządzeń, zapewniamy responsywne strony internetowe,
          które prezentują się doskonale na każdym ekranie. Nasze rozwiązania są
          szybkie, zoptymalizowane pod kątem wydajności, co wpływa na pozytywne
          doświadczenia użytkowników.
          <br />
          <strong>SEO Optymalizacja:</strong> Twoja strona nie tylko ma wyglądać
          dobrze, ale także być widoczna dla Twojej docelowej grupy odbiorców.
          Nasze podejście do projektowania stron uwzględnia optymalizację pod
          kątem wyszukiwarek, co pomaga w osiągnięciu wyższej pozycji w wynikach
          wyszukiwania.
          <br />
          <strong>Wsparcie i Dostępność:</strong> Nie kończymy pracy po
          dostarczeniu strony. Nasz zespół oferuje wsparcie techniczne i pomoc w
          utrzymaniu strony w doskonałej kondycji.
        </p>
        <Button>Napisz do nas!</Button>
      </TextWrapper>
      <Image src={Image1} alt="Dragons Cape" />
    </ImageTextWrapper>

    <ImageTextWrapper>
      <Image src={Image2} alt="Dragon Scape" />
      <TextWrapper>
        <p>
          <strong>Dlaczego My?</strong>
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
        </p>
      </TextWrapper>
    </ImageTextWrapper>
    <p>TO ZALEŻY...</p>
    <Price />
  </Container>
);

export default Web;
