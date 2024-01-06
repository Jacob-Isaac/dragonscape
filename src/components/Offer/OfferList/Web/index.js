import { Container } from "../../../Container/styled";
import { H12 } from "../../../WhyUs/styled";
import styled from "styled-components";
import Image1 from "../../../../images/webOfferDragon.svg";
import Image2 from "../../../../images/webOfferDragonSecond.png";
import Advertise from "../../../../images/advertise.svg";
import Price from "../../Pricing";

// Your existing Container and H12 styled components...

const ImageTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px; /* Adjust margin as needed */
`;

const TextWrapper = styled.div`
  max-width: 50%; /* Adjust the width of text */
`;

const Image = styled.img`
margin-top: 100px;
  min-width: 450px; 
  max-width: 450px; 
`;
const AdvertiseImg = styled.img`
  /* Adjust the width of the image */
`;

const Button = styled.button`
  /* Adjust the width of the image */
  width: 130px;
  height: 50px;
  border:none;
 
  box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
border-radius: 8px;
  background-color: ${({ theme }) => theme.color.dragonOrange};
color: ${({ theme }) => theme.color.dragonWhite};
:hover {
  color: ${({ theme }) => theme.color.dragonBlack};
}

`;

const Web = () => (
  <Container>
    {/* First scenario: Image on the right */}
    <ImageTextWrapper>
      <TextWrapper>
      <H12>Tworzenie stron internetowych</H12>
    <p>
      Niezwykła Obecność Online: Twoja Unikatowa Strona Internetowa. Czy chcesz
      wyróżnić się w gąszczu internetowej konkurencji? Marzysz o stronie, która
      nie tylko przyciąga uwagę, ale również konwertuje odwiedzających w
      lojalnych klientów? Projektowanie stron internetowych to nasza pasja i
      umiejętność, która przekształca Twoje wizje w rzeczywistość.
    </p>
    <p>
      <strong>Nasze Unikalne podejście:</strong>
      <br />
      <strong>Spersonalizowany Design:</strong> Każda strona, którą projektujemy,
      to efekt dogłębnego zrozumienia Twojej marki. Tworzymy spersonalizowane,
      estetyczne projekty, które oddają esencję Twojego biznesu.
      <br />
      <strong>Responsywność i Wysoka Wydajność:</strong> W dobie różnorodności
      urządzeń, zapewniamy responsywne strony internetowe, które prezentują się
      doskonale na każdym ekranie. Nasze rozwiązania są szybkie, zoptymalizowane
      pod kątem wydajności, co wpływa na pozytywne doświadczenia użytkowników.
      <br />
      <strong>SEO Optymalizacja:</strong> Twoja strona nie tylko ma wyglądać dobrze,
      ale także być widoczna dla Twojej docelowej grupy odbiorców. Nasze podejście
      do projektowania stron uwzględnia optymalizację pod kątem wyszukiwarek, co
      pomaga w osiągnięciu wyższej pozycji w wynikach wyszukiwania.
      <br />
      <strong>Wsparcie i Dostępność:</strong> Nie kończymy pracy po dostarczeniu
      strony. Nasz zespół oferuje wsparcie techniczne i pomoc w utrzymaniu strony
      w doskonałej kondycji.
    </p>
        <Button>Napisz do nas!</Button>
      </TextWrapper>
      <Image src={Image1} alt="Dragons Cape" />

    
 

    </ImageTextWrapper>

    {/* Second scenario: Image on the left */}
    <ImageTextWrapper>
    <Image src={Image2} alt="Dragon Scape" />

    
      <TextWrapper>
      <p>
      <strong>Dlaczego My?</strong>
      <br />
      <strong>Doświadczenie i Pasja:</strong> Nasze doświadczenie w projektowaniu
      stron internetowych to lata praktyki i setki zadowolonych klientów. Pasja
      do tworzenia funkcjonalnych, estetycznych stron jest w naszym DNA.
      <br />
      <strong>Indywidualne Podejście:</strong> Nie ma dwóch identycznych projektów.
      Stawiamy na spersonalizowane podejście do każdego klienta, starając się
      zrozumieć i oddać wizję biznesową.
      <br />
      <strong>Skuteczność i Rezultaty:</strong> Nasze projekty nie tylko wyglądają
      świetnie, ale przynoszą konkretne rezultaty. Dzięki optymalizacji SEO i
      funkcjonalnościom, zwiększamy ruch na stronie oraz konwersje.
      <br />
      Gotowy na wyjątkową obecność online dla Twojego biznesu? Skontaktuj się z
      nami już dziś, a razem stworzymy stronę internetową, która zapiera dech w
      piersiach i przyciągnie uwagę Twoich potencjalnych klientów.
    </p>
    <p>
      Z poważaniem, <br />
      [Zespół Twojej Firmy Projektowej Stron Internetowych]
    </p>
      </TextWrapper>
    </ImageTextWrapper>
    {/* <AdvertiseImg src={Advertise} /> */}
    <p>TO ZALEŻY...</p>
    <Price />

    {/* Remaining content */}
    {/* ... */}
  </Container>
);

export default Web;