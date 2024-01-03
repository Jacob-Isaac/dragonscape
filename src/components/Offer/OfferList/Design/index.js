import { Container } from "../../../Container/styled";
import { H12 } from "../../../WhyUs/styled";
import styled from "styled-components";
import Image1 from "../../../../images/111.png";
import Image2 from "../../../../images/111.png";
import Advertise from "../../../../images/advertise.svg";
import Pricing from "../../Pricing";

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
  max-width: 40%; /* Adjust the width of the image */
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

const Design = () => (
  <Container>
    {/* First scenario: Image on the right */}
    <ImageTextWrapper>
      <TextWrapper>
        <H12>
          Identyfikacja wizualna: Logo, Banery, Grafiki, Obrazki, Personalizacja
          Graficzna Stron www
        </H12>
        <p>
          <h2>Dragon <b>s</b>cape czy Dragon<b>s</b> cape? </h2>
          <br />
          Gdy próbujesz zdecydować się na identyfikację wizualną Twojej marki
          musisz stanąć przed wieloma wyborami. Czasem drobne różnice mogą
          zmienić wszystko o 180 stopni. Dlatego jesteśmy tutaj, by pomóc Ci w
          tym trudnym zadaniu i stworzyć design jakiego potrzebuje Twoja firma.
        </p>
        <p>
          <h2>Niezapomniane Logo</h2>
          <br />
          Stwórzmy dla Ciebie unikalne logo, które będzie wizytówką Twojej
          marki. Nasz proces projektowy opiera się na głębokim zrozumieniu
          Twojej firmy, jej wartości i celów, aby stworzyć logo, które wyróżni
          Cię spośród konkurencji.
        </p>
        <p>
          <h2>Kreatywne Banery i Grafiki</h2>
          <br />
          Nasi utalentowani graficy mogą przygotować nie tylko banery, ale
          również grafiki, które przyciągną uwagę Twoich klientów. Dzięki
          kreatywności i zrozumieniu trendów projektowych, stworzymy materiały,
          które wyróżnią Twoją markę w każdym miejscu.
        </p>
        <p>
          <h2>Pozwól Twojej Stronie WWW Wyrazić Tożsamość Twojej Marki</h2>
          <br />
          Nasze usługi personalizacji graficznej stron www pozwolą Twojej
          witrynie internetowej mówić za Ciebie. Tworzymy spersonalizowane
          rozwiązania, które nie tylko wyglądają atrakcyjnie, ale także
          zapewniają optymalne doświadczenia użytkownikom.
        </p>
        <p>
          <strong>Dlaczego My</strong>
          <br />
          ✔️ Indywidualne podejście: Tworzymy unikalne rozwiązania dopasowane do
          Twoich potrzeb.
          <br />
          ✔️ Kreatywność i profesjonalizm: Nasz zespół łączy innowacyjność z
          doświadczeniem.
          <br />
          ✔️ Skuteczne rezultaty: Nasze projekty przekładają się na sukces
          biznesowy klientów.
          <br />
        </p>
        <p>
          Niech Twoja marka wyróżnia się w tłumie! Skontaktuj się z nami już
          dziś, abyśmy mogli zacząć budować wyjątkową tożsamość wizualną dla
          Twojego biznesu.
        </p>
        <Button>Napisz do nas!</Button>
      </TextWrapper>
      <Image src={Image1} alt="Image 1" />
    </ImageTextWrapper>

    {/* Second scenario: Image on the left */}
    <ImageTextWrapper>
      <Image src={Image2} alt="Image 2" />
      <TextWrapper>
        <h2>Zwiększ Wyrazistość Marki: Profesjonalna Identyfikacja Wizualna</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h3 style={{ alignSelf: "flex-end" }}>Letter from</h3>
          <h1 style={{ paddingTop: "10px" }}>Jakub Nowakowski</h1>
        </div>
        <h3>CEO Dragonscape</h3>
        <br />
        Witaj!
        <br />{" "}
        <p>
          W dzisiejszym konkurencyjnym świecie biznesowym wyjątkowa
          identyfikacja wizualna to kluczowy element, który wyróżnia markę
          spośród innych. Oferujemy kompleksowe usługi tworzenia logo, banerów,
          grafik, obrazków oraz personalizacji graficznej stron internetowych,
          aby pomóc Twojej marce osiągnąć niezapomniany wizerunek.
        </p>
        <p>
          <strong>Co Oferujemy:</strong>
          <br />
          Logo, które Wyróżnia Twoją Markę: Nasze doświadczenie pozwala nam
          tworzyć unikatowe logotypy, które idealnie odzwierciedlają wartości i
          charakter Twojego biznesu.
          <br />
          Banery i Grafiki Optymalizowane Pod Kątem Konwersji: Tworzymy
          efektowne banery reklamowe i grafiki, które nie tylko przyciągają
          uwagę, ale także zwiększają zaangażowanie użytkowników.
          <br />
          Kreatywne Obrazki, Które Przyciągają Wzrok: Nasz zespół artystów
          graficznych tworzy wyjątkowe obrazki, które przekazują Twoją historię
          i przyciągają uwagę klientów.
          <br />
          Personalizacja Graficzna Stron WWW: Zapewniamy profesjonalną
          personalizację graficzną stron internetowych, aby zapewnić spójny
          wizerunek marki i zapewnić użytkownikom niezapomniane doświadczenia.
        </p>
        <p>
          <strong>Dlaczego My:</strong>
          <br />
          Kreatywność i Indywidualne podejście: Każdy projekt traktujemy
          indywidualnie, dbając o unikalność i oryginalność.
          <br />
          Doświadczenie i Profesjonalizm: Posiadamy bogate doświadczenie w
          branży, co pozwala nam dostarczyć usługi na najwyższym poziomie.
          <br />
          Optymalizacja pod Kątem SEO: Nasze rozwiązania graficzne są
          zaprojektowane z myślą o optymalizacji pod kątem SEO, co pomaga w
          poprawie widoczności online.
        </p>
        <p>
          Skorzystaj z Naszych Usług, By Twój Biznes Wybił Się Ponad
          Konkurencję!
          <br />
          Zaufało nam już wielu klientów, którym pomogliśmy osiągnąć sukces w
          świecie online. Daj nam szansę, a pomożemy Ci stworzyć silny,
          rozpoznawalny wizerunek marki.
          <br />
          Skontaktuj się z nami już dziś, abyśmy mogli omówić, jak możemy pomóc
          w wizualnym wyrażeniu Twojej marki.
          <br />
          Pozdrawiamy,
          <br />
          <br />
          [Zespół Dragonscape]
        </p>
      </TextWrapper>
    </ImageTextWrapper>
    <AdvertiseImg src={Advertise} />
    <Pricing />

    {/* Remaining content */}
    {/* ... */}
  </Container>
);

export default Design;
