import {
  ContainerPrivacyPolicy,
} from "../../../styledComponents/Container/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../DataSlice/githubSlice";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState} from "../../DataSlice/githubSlice";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

function PrivacyPolicy() {
  const dispatch = useDispatch();
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
    <ContainerPrivacyPolicy>
      <h1 class="h1 text-center">Polityka Prywatności</h1>
      <h2 class="h2 paragraph-title">§ 1 Postanowienia ogólne</h2>
      <ol>
        <li>
          Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem:{" "}
          <strong>dragonscape.pl</strong>
        </li>
        <li>
          Operatorem serwisu oraz Administratorem danych osobowych jest: "Dragonscape" Jakub Nowakowski
      
        {" "}
          <span
            data-v-cf3b444f=""
            class="gpp-text-highlight preview empty"
          ></span>
          . Z{" "}
          <span data-v-cf3b444f="" class="gpp-text-highlight preview">
            "Dragonscape" Jakub Nowakowski
          </span>{" "}
          można kontaktować się telefonicznie na numer telefonu: (+48) 732 491 732
          lub drogą e-mailową na adres:{" "}
          <span data-v-cf3b444f="" class="gpp-text-highlight preview">
            kontakt@dragonscape.pl
          </span>
        </li>
        <li>
        Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.
        </li>
        <li>
          {" "}
          Polityka prywatności stanowi integralną część Regulaminu. Korzystając
          z oferowanych przez nas usług, powierzasz nam swoje informacje.
          Niniejszy dokument służy jedynie jako pomoc w zrozumieniu, jakie
          informacje i dane są zbierane i w jakim celu oraz do czego są
          wykorzystywane. Te dane są bardzo dla nas ważne, dlatego prosimy o
          dokładne zapoznanie się z tym dokumentem gdyż określa on zasady oraz
          sposoby przetwarzania i ochrony danych osobowych. Dokument ten określa
          także zasady stosowania plików
            „Cookies”
          .
        </li>
        <li>
          {" "}
          Informujemy, że przestrzegamy zasad ochrony danych osobowych oraz
          wszelkich uregulowań prawnych, które są przewidziane Ustawą o ochronie
          danych osobowych oraz Rozporządzeniem Parlamentu Europejskiego i Rady
          (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
          fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
          swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.{" "}
        </li>
        <li>
          {" "}
          Na żądanie osoby, której dane osobowe są przetwarzane udzielamy
          wyczerpujących informacji w jaki sposób wykorzystujemy jego dane
          osobowe. Zawsze w jasny sposób staramy się poinformować o danych,
          które gromadzimy, w jaki sposób je wykorzystujemy, jakim celom mają
          służyć i komu je przekazujemy, jaką zapewniamy ochronę tych danych
          przy przekazaniu innym podmiotom oraz udzielamy informacji o
          instytucjach, z którymi należy się skontaktować w razie wątpliwości.{" "}
        </li>
      </ol>
      <h2 class="h2 paragraph-title">§ 2 Zasady prywatności</h2>
      <ol>
        <li>
          {" "}
          Szanujemy Twoją prywatność. Pragniemy zagwarantować Ci wygodę
          korzystania z naszych usług.{" "}
        </li>
        <li>
          {" "}
          Cenimy zaufanie, jakim Nas obdarzasz, powierzając nam swoje dane
          osobowe w celu realizacji usług. Zawsze korzystamy z danych osobowych
          w sposób uczciwy oraz tak, aby nie zawieść Twojego zaufania, tylko w
          zakresie niezbędnym do realizacji usług.{" "}
        </li>
        <li>
          {" "}
          Jako Użytkownik masz prawo do uzyskania pełnych i jasnych informacji o
          tym, w jaki sposób wykorzystujemy Twoje dane osobowe i do jakich celów
          są niezbędne. Zawsze w klarowny sposób informujemy o danych, które
          zbieramy, w jaki sposób i komu je udostępniamy oraz udzielamy
          informacji o podmiotach, z którymi należy się skontaktować w razie
          wątpliwości.{" "}
        </li>
        <li>
          {" "}
          W razie wątpliwości odnośnie wykorzystywania przez nas Twoich danych
          osobowych, niezwłocznie podejmiemy działania w celu wyjaśnienia i
          rozwiania takich wątpliwości. W sposób wyczerpujący odpowiadamy na
          wszystkie pytania z tym związane.{" "}
        </li>
        <li>
          {" "}
          Podejmiemy wszystkie uzasadnione działania, aby chronić Twoje dane
          przed nienależytym i niekontrolowanym wykorzystaniem.{" "}
        </li>
        <li>
          {" "}
          Podstawą prawną przetwarzania Twoich danych osobowych jest:
          <ol class="gpp-list-selectable list-type-latin" start="1">
            <li class="active">
              <span class="gpp-list-selectable__content">
                <span>art. 6 ust. 1 lit. a) </span>
                osoba, której dane dotyczą wyraziła zgodę na przetwarzanie
                swoich danych osobowych w jednym lub większej liczbie określonych
                celów
              </span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                <span>art. 6 ust. 1 lit. b)</span> przetwarzanie jest niezbędne
                do wykonania umowy, której stroną jest osoba, której dane
                dotyczą, lub do podjęcia działań na żądanie osoby, której dane
                dotyczą, przed zawarciem umowy
              </span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                <span>art. 6 ust. 1 lit. c)</span> przetwarzanie jest niezbędne
                do wypełnienia obowiązku prawnego ciążącego na administratorze
              </span>
            </li>
            <li class="active">
              {" "}
              <span class="gpp-list-selectable__content">
                <span>art. 6 ust. 1 lit. d) </span>
                przetwarzanie jest niezbędne do ochrony żywotnych interesów
                osoby, której dane dotyczą, lub innej osoby fizycznej
              </span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                <span>art. 6 ust. 1 lit. e)</span> przetwarzanie jest niezbędne
                do wykonania zadania realizowanego w interesie publicznym lub w
                ramach sprawowania władzy publicznej powierzonej
                administratorowi
              </span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                <span>art. 6 ust. 1 lit. f)</span> przetwarzanie jest niezbędne
                do celów wynikających z prawnie uzasadnionych interesów
                realizowanych przez administratora lub przez stronę trzecią
              </span>
            </li>
          </ol>{" "}
        </li>
      </ol>
      <ol start="7">
        <li>
          {" "}
          Twoje dane osobowe związane z zawarciem i realizacją umowy
          przetwarzane będą przez okres jej realizacji, a także przez okres nie
          dłuższy niż przewidują to przepisy prawa, w tym przepisy Kodeksu
          cywilnego oraz ustawy o rachunkowości, tj. nie dłużej niż przez 10
          lat, licząc od końca roku kalendarzowego w którym ostatnia umowa
          została wykonana.{" "}
        </li>
        <li>
          {" "}
          Twoje dane osobowe przetwarzane w celu zawarcia i wykonania przyszłych
          umów będą przetwarzane do czasu zgłoszenia sprzeciwu.{" "}
        </li>
        <li>
          {" "}
          Przysługuje Ci prawo do: dostępu do swoich danych osobowych i
          otrzymania kopii danych osobowych podlegających przetwarzaniu,
          sprostowania swoich nieprawidłowych danych; żądania usunięcia danych
          (prawo do bycia zapomnianym) w przypadku wystąpienia okoliczności
          przewidzianych w art. 17 RODO; żądania ograniczenia przetwarzania
          danych w przypadkach wskazanych w art. 18 RODO, wniesienia sprzeciwu
          wobec przetwarzania danych w przypadkach wskazanych w art. 21 RODO,
          przenoszenia dostarczonych danych, przetwarzanych w sposób
          zautomatyzowany.{" "}
        </li>
        <li>
          {" "}
          Jeżeli uważasz, że Twoje dane osobowe są przetwarzane niezgodnie z
          prawem, możesz wnieść skargę do organu nadzorczego (Urząd Ochrony
          Danych Osobowych, ul. Stawki 2, Warszawa). Jeśli potrzebujesz
          dodatkowych informacji związanych z ochroną danych osobowych lub
          chcesz skorzystać z przysługujących praw, skontaktuj się z nami
          poprzez adres e-mail.{" "}
        </li>
        <li>
          {" "}
          Przestrzegamy wszystkich obowiązujących przepisów i regulacji
          dotyczących ochrony danych i będziemy współpracować z organami
          zajmującymi się ochroną danych oraz uprawnionymi do tego organami
          ścigania. W przypadku braku przepisów dotyczących ochrony danych,
          będziemy postępować zgodnie z ogólnie przyjętymi zasadami ochrony
          danych, zasadami współżycia społecznego jak i ustalonymi zwyczajami.{" "}
        </li>
        <li>
          {" "}
          W razie pytań, zapraszamy do kontaktu za pomocą strony, z której
          zostałeś przekierowany do niniejszej Polityki prywatności. Prośba o
          kontakt zostanie niezwłocznie przekazana do odpowiedniej powołanej do
          tego osoby.{" "}
        </li>
        <li>
          {" "}
          Aby ułatwić nam odpowiedź bądź ustosunkowanie się do podanych
          informacji, prosimy o podanie imienia i nazwiska.{" "}
        </li>
      </ol>
      <h2 class="h2 paragraph-title">
        § 3 Zakres i cel zbierania danych osobowych
      </h2>
      <ol>
        <li>
          {" "}
          Przetwarzamy niezbędne dane osobowe w celu realizacji usług oraz w
          celach księgowych i tylko takich.{" "}
        </li>
        <li>
          {" "}
          Zbieramy, przetwarzamy i przechowujemy następujące dane użytkowników:{" "}
          <ol class="gpp-list-selectable list-type-latin" start="1">
            <li class="active">
              <span class="gpp-list-selectable__content">imię i nazwisko,</span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                adres poczty elektronicznej (e-mail),
              </span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                numer telefonu (komórkowy, stacjonarny),
              </span>
            </li>
            <li class="">
              <span class="gpp-list-selectable__content">
                informacje o używanej przeglądarce internetowej,
              </span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                inne dobrowolnie przekazane nam dane osobowe.
              </span>
            </li>
          </ol>{" "}
          Oraz w przypadku podpisania umowy:
          <ol class="gpp-list-selectable list-type-latin" start="1">
          <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                adres zamieszkania,
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                adres do doręczeń (jeśli jest inny niż adres zamieszkania),
              </span>
            </li>
            <li class="">
              <span class="gpp-list-selectable__content">
                numer identyfikacji podatkowej (NIP),
              </span>
            </li>
            </ol>
        </li>
      </ol>
      <ol start="3">
        <li>
          {" "}
          Podanie powyższych danych przez jest całkowicie dobrowolne ale także i
          niezbędne do pełnej realizacji usług.{" "}
        </li>
        <li class="active-text inactive-text">
          W niektórych sytuacjach możemy przesyłać wybrane dane osobowe do serwerów znajdujących się poza krajem
          Twojego zamieszkania lub do podmiotów powiązanych, stron trzecich z
          siedzibą w innych krajach w tym krajach z obszaru EOG (Europejski
          Obszar Gospodarczy, EOG ang. European Economic Area, EEA – strefa
          wolnego handlu i Wspólny Rynek, obejmujące państwa Unii Europejskiej i
          Europejskiego Stowarzyszenia Wolnego Handlu EFTA) w celu przetwarzania
          danych osobowych przez takie podmioty w naszym imieniu zgodnie z
          postanowieniami niniejszej Polityki prywatności oraz obowiązującymi
          przepisami prawa, zwyczajami jak i regulacjami dotyczącymi ochrony
          danych.{" "}
        </li>
        <li>
          {" "}
          Dostęp do Twoich danych mogą posiadać podmioty świadczące usługi
          niezbędne do prowadzenia serwisu tj.:
          <ol class="gpp-list-selectable list-type-latin" start="1">
            <li class="active">
              {" "}
              <span class="gpp-list-selectable__content">
                Firmy hostingowe, świadczące usługi hostingu lub usług
                pokrewnych dla Administratora
              </span>
            </li>
            <li class="active">
              {" "}
              <span class="gpp-list-selectable__content">
                Firmy, za pośrednictwem których świadczona jest usługa
                Newslettera
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                Firmy serwisowe i wsparcia IT dokonujące konserwacji lub
                odpowiedzialne za utrzymanie infrastruktury IT (obecnie nie dotyczy)
              </span>
            </li>
            <li class="active">
              <span class="gpp-list-selectable__content">
                Firmy pośredniczące w płatnościach on-line za towary lub usługi
                oferowane w ramach Serwisu (w przypadku dokonywania transakcji
                zakupu w Serwisie)
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                Firmy pośredniczące w płatnościach mobilnych za towary lub
                usługi oferowane w ramach Serwisu (w przypadku dokonywania
                transakcji zakupu w Serwisie)
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                Firmy odpowiedzialne za prowadzenie księgowości Administratora
                (w przypadku dokonywania transakcji zakupu w Serwisie)
              </span>
            </li>
            <li class="active">
              {" "}
              <span class="gpp-list-selectable__content">
                Firmy odpowiedzialne za dostarczanie produktów fizycznych do
                Użytkownika (usługi pocztowe / kurierskie w przypadku
                dokonywania transakcji zakupu w Serwisie)
              </span>
            </li>
          </ol>{" "}
        </li>
      </ol>
      <h2 class="h2 paragraph-title">§ 4 Pliki Cookie</h2>
      <ol>
        <li>
          {" "}
          Stosujemy pliki cookie lub podobne technologie (zwane dalej łącznie:
          „plikami cookie”) poprzez które należy rozumieć dane informatyczne, w
          szczególności pliki tekstowe, przeznaczone do korzystania ze strony
          internetowej i przechowywane w urządzeniach końcowych Użytkowników
          przeglądających strony. Informacje zbierane przy pomocy plików cookie
          pozwalają dostosowywać usługi i treści do indywidualnych potrzeb, a
          także preferencji użytkowników, jak również służą do opracowywania
          ogólnych statystyk dotyczących korzystania przez użytkowników ze
          stron. Dane gromadzone przy użyciu plików cookie są zbierane wyłącznie
          w celu wykonywania określonych funkcji na rzecz Użytkowników i są
          zaszyfrowane w sposób uniemożliwiający dostęp do nich osobom
          nieuprawnionym.{" "}
        </li>
        <li>
          {" "}
          Na naszej stronie stosujemy pliki cookie:
          <ol class="gpp-list-selectable list-type-latin" start="1">
            <li class="active">
              {" "}
              <span class="gpp-list-selectable__content">
                <strong>Cookies wewnętrzne</strong> - pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez system
                teleinformatyczny Serwisu
              </span>
            </li>
            <li class="active">
              {" "}
              <span class="gpp-list-selectable__content">
                <strong>Cookies zewnętrzne</strong> - pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez systemy
                teleinformatyczne Serwisów zewnętrznych. Skrypty Serwisów
                zewnętrznych, które mogą umieszczać pliki Cookies na
                Urządzeniach Użytkownika zostały świadomie umieszczone w
                Serwisie poprzez skrypty i usługi udostępnione i zainstalowane w
                Serwisie (np. Google reCAPTCHA ).
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                <strong>Cookies sesyjne</strong> - pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez Serwis podczas jednej
                sesji danego Urządzenia. Po zakończeniu sesji pliki są usuwane z
                Urządzenia Użytkownika.
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                <strong>Cookies trwałe</strong> - pliki zamieszczane i
                odczytywane z Urządzenia Użytkownika przez Serwis do momentu ich
                ręcznego usunięcia. Pliki nie są usuwane automatycznie po
                zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia
                Użytkownika jest ustawiona na tryb usuwanie plików Cookie po
                zakończeniu sesji Urządzenia.
              </span>
            </li>
          </ol>
        </li>
      </ol>
      <ol start="3">
        <li>
          {" "}
          W ramach naszej strony internetowej, stosowane są następujące rodzaje
          plików cookie ze względu na niezbędność do realizacji usług:{" "}
          <ol class="gpp-list-selectable list-type-latin" start="1">
            <li class="active">
              <span class="gpp-list-selectable__content">
                niezbędne pliki cookie, umożliwiające korzystanie z usług
                dostępnych w ramach strony internetowej, w szczególności
                uwierzytelniające pliki cookie wykorzystywane do usług
                wymagających uwierzytelnienia;
              </span>
            </li>
            <li class="active">
              {" "}
              <span class="gpp-list-selectable__content">
                pliki cookie służące do zapewnienia bezpieczeństwa, w
                szczególności wykorzystywane do wykrywania nadużyć w zakresie
                uwierzytelniania;
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                wydajnościowe pliki cookie, umożliwiające zbieranie informacji o
                sposobie korzystania ze stron internetowych;
              </span>
            </li>
            <li class="">
              {" "}
              <span class="gpp-list-selectable__content">
                funkcjonalne pliki cookie, umożliwiające „zapamiętanie”
                wybranych przez użytkownika ustawień i personalizację interfejsu
                użytkownika;
              </span>
            </li>
            <li class="">
              <span class="gpp-list-selectable__content">
                reklamowe pliki cookie, umożliwiające dostarczanie użytkownikom
                treści reklamowych dostosowanych do ich zainteresowań. (obecnie nie dotyczy - brak reklam){" "}
              </span>
            </li>
          </ol>{" "}
        </li>
      </ol>
      <ol start="4">
        <li>
          Oprogramowanie do przeglądania stron internetowych (przeglądarka
          internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
          cookie w urządzeniu końcowym. Użytkownik przeglądający stronę
          internetową może samodzielnie i w każdym czasie zmienić ustawienia
          dotyczące plików cookie, określając warunki ich przechowywania i
          uzyskiwania dostępu przez pliki cookie do swojego urządzenia. Zmiany
          ustawień, o których mowa w zdaniu poprzednim, Klient może dokonać za
          pomocą ustawień przeglądarki internetowej. Ustawienia te mogą zostać
          zmienione w szczególności w taki sposób, aby blokować automatyczną
          obsługę plików cookie w ustawieniach przeglądarki internetowej bądź
          informować o ich każdorazowym zamieszczeniu plików cookie na
          urządzeniu Użytkownika. Szczegółowe informacje o możliwości i
          sposobach obsługi plików cookie dostępne są w ustawieniach
          oprogramowania (przeglądarki internetowej).{" "}
        </li>
        <li>
          {" "}
          Korzystanie ze strony internetowej bez zmiany ustawień w zakresie
          plików cookie, oznacza wyrażenie zgody na zapisywanie plików cookie.
          Klient zawsze może wycofać zgodę poprzez zmianę ustawień dotyczących
          plików cookie we własnej przeglądarce. Informacje w jaki sposób dokonać konfiguracji ustawień
          plików cookie w przykładowych przeglądarkach internetowych Użytkownik
          może znaleźć tutaj:{" "}
          <ul class="list">
            <li>
              <a
                href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=pl"
                rel="noopener norefferer"
                target="_blank"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://help.opera.com/pl/latest/web-preferences/"
                rel="noopener norefferer"
                target="_blank"
              >
                Opera
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/pl/kb/blokowanie-ciasteczek"
                rel="noopener norefferer"
                target="_blank"
              >
                FireFox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/pl-pl/help/4027947/microsoft-edge-delete-cookies"
                rel="noopener norefferer"
                target="_blank"
              >
                Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                rel="noopener norefferer"
                target="_blank"
              >
                Safari
              </a>
            </li>
          </ul>
        </li>
      </ol>
      <h2 class="h2 paragraph-title">§ 5 Prawa i obowiązki</h2>
      <ol>
        <li>
          {" "}
          Mamy prawo a w przypadkach prawem określonych także i ustawowy
          obowiązek do przekazania wybranych bądź wszystkich informacji
          dotyczących danych osobowych organom władzy publicznej bądź osobom
          trzecim, które zgłoszą takie żądanie udzielenia informacji na
          podstawie obowiązujących przepisów prawa polskiego.
        </li>
        <li>
          {" "}
          Użytkownik ma prawo do:{" "}
          <ol class="list-type-latin list-span-strong">
            <li>
              <strong>dostępu do danych osobowych. </strong>Użytkownikowi przysługuje
              prawo uzyskania dostępu do swoich danych osobowych, realizowane na
              żądanie złożone do Administratora.
            </li>
            <li>
              <strong>sprostowania danych osobowych. </strong>Użytkownikowi
              przysługuje prawo żądania od Administratora niezwłocznego
              sprostowania danych osobowych, które są nieprawidłowe lub / oraz
              uzupełnienia niekompletnych danych osobowych, realizowane na
              żądanie złożone do Administratora.
            </li>
            <li>
              <strong>usunięcia danych osobowych. </strong>Użytkownikowi
              przysługuje prawo żądania od Administratora niezwłocznego
              usunięcia danych osobowych, realizowane na żądanie złożone do
              Administratora. W przypadku kont użytkowników, usunięcie danych
              polega na anonimizacji danych umożliwiających identyfikację
              Użytkownika. Administrator zastrzega sobie prawo wstrzymania
              realizacji żądania usunięcia danych w celu ochrony prawnie
              uzasadnionego interesu Administratora (np. gdy Użytkownik
              dopuścił się naruszenia Regulaminu, lub gdy dane zostały pozyskane
              wskutek prowadzonej korespondencji). W przypadku usługi
              Newsletter, użytkownik ma możliwość samodzielnego usunięcia swoich
              danych osobowych korzystając z odnośnika umieszczonego w każdej
              przesyłanej wiadomości e-mail.
            </li>
            <li>
              <strong>ograniczenia przetwarzania danych osobowych. </strong>
              Użytkownikowi przysługuje prawo ograniczenia przetwarzania danych
              osobowych w przypadkach wskazanych w art. 18 RODO, m.in.
              kwestionowania prawidłowość danych osobowych, realizowane na
              żądanie złożone do Administratora.
            </li>
            <li>
              <strong>przenoszenia danych osobowych. </strong>Użytkownikowi
              przysługuje prawo uzyskania od Administratora, danych osobowych
              dotyczących Użytkownika w ustrukturyzowanym, powszechnie używanym
              formacie nadającym się do odczytu maszynowego, realizowane na
              żądanie złożone do Administratora.
            </li>
            <li><strong>wniesienia sprzeciwu wobec przetwarzania danych osobowych. </strong>Użytkownikowi przysługuje prawo wniesienia sprzeciwu wobec
              przetwarzania jego danych osobowych w przypadkach określonych w
              art. 21 RODO, realizowane na żądanie złożone do Administratora.
            </li>
            <li>
              <strong>wniesienia skargi. </strong>Użytkownikowi przysługuje prawo
              wniesienia skargi do organu nadzorczego zajmującego się ochroną
              danych osobowych.
            </li>
          </ol>
        </li>
      </ol>
    </ContainerPrivacyPolicy>
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

export default PrivacyPolicy;