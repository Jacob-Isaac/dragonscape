import { Div, H1, P } from "./styled";
import { StyledList } from "../WhyUs/List/styled";

const WhyUs = () => {
  return (
    <div>
      <StyledList>
        <Div>
          <H1>Kolektyw</H1>
          <P>
            Pochodzimy z różnych branż, mamy bogate doświadczenie zdobyte
            podczas tworzenia wielu projektów, oraz pracy w handlu. To daje nam
            różne punkty widzenia - razem tworzymy kolektyw!
          </P>
        </Div>
        <Div>
          <H1>Metody</H1>
          <P>
            Tworzymy innowacyjne projekty, ale co najważniejsze -
            spersonalizowane i dostosowane do Twoich potrzeb ! My jesteśmy
            smokami , a Ty - kim chcesz być?
          </P>
        </Div>
        <Div>
          <H1>Kreatywność</H1>
          <P>
            Nie tworzymy sztampowych projektów - grafiki, logo, banery czy inne
            elementy graficzne twojej strony będą się wyróżniać i tworzyć spójną
            całość. Niezależnie jaki styl wybierzesz.
          </P>
        </Div>
      </StyledList>
    </div>
  );
};

export default WhyUs;
