import { TilesPersonSection } from "./styled";
import TilePerson from "./tilePerson.js";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../features/DataSlice/dataSlice.js";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
} from "../../features/DataSlice/dataSlice.js";
import LoadingPage from "../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../features/TechnicalTabs/ErrorPage";
import { SmoothWrapper } from "../../styledComponents/Wrapper/styled.js";
import { NegativeMarginTop } from "../../styledComponents/Wrapper/styled.js";

const Cast = ({ selectedCast }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectIsLightMode);
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
        <NegativeMarginTop>
                  <h1 style={{textAlign:"center"}}>O nas</h1>
          <br />
        <SmoothWrapper>
          <p>
            Jesteśmy Dragonscape! Zajmujemy się projektowaniem logo i
            identyfikacji wizualnej, a także tworzeniem profesjonalnych stron internetowych
            dla różnych branż i sektorów. Naszą misją jest dostarczanie wysokiej
            jakości usług, które spełniają oczekiwania naszych klientów i
            pomagają im osiągnąć sukces w biznesie. <br />
            <br />
            Naszą firmę założyli bracia: Miłosz i Jakub, którzy mają
            bogate doświadczenie w branży handlowej oraz IT. Miłosz jest
            absolwentem informatyki oraz założycielem marki "Promuj Siebie".
            Jakub jest ekspertem do spraw stosunków międzynarodowych (specjalność gospodarka i biznes międzynarodowy). 
            Razem postanowili połączyć swoje umiejętności i zainteresowania, aby
            stworzyć firmę, która oferuje kompleksowe rozwiązania dla potrzeb
            internetowych. W naszym zespole pracują również inni utalentowani i
            kreatywni ludzie, którzy dbają o każdy aspekt projektu, od analizy,
            przez projektowanie, po wdrożenie i utrzymanie.
            <br />
            <br />
            Używamy nowoczesnych technologii i narzędzi, aby zapewnić naszym
            klientom szybkie, bezpieczne i funkcjonalne strony internetowe oraz
            design, który przyciąga uwagę i buduje zaufanie. Nasze portfolio
            obejmuje projekty dla różnych sektorów, takich jak gastronomia,
            turystyka, gaming, sport, czy kultura.
            Niezależnie od tego, czy potrzebujesz prostej wizytówki,
            rozbudowanego sklepu internetowego, czy oryginalnego logo, jesteśmy
            gotowi podjąć się wyzwania i dostosować się do twoich potrzeb i
            preferencji.
            <br />
            <br />
            Jeśli szukasz profesjonalnej i niezawodnej firmy, która stworzy dla
            ciebie stronę internetową i logo, skontaktuj się z nami. Zapewniamy
            konkurencyjne ceny, terminową realizację i gwarancję satysfakcji. Z
            Dragonscape twoja firma zyska nowy wymiar w internecie!
          </p>
          </SmoothWrapper>
          <TilesPersonSection>
            {selectedCast.map((person) => (
              <TilePerson
                key={person.id + "_" + person.job}
                personName={person.name}
                personRole={person.character}
                personId={person.id}
                personProfilePath={person.profile_path}
              />
            ))}
          </TilesPersonSection>
        </NegativeMarginTop>
      );
      break;
    case "error":
      returned = <ErrorPage />;
      break;
    default:
      returned = <LoadingPage/>;
  }

  return returned;
};

export default Cast;
