// Treść komunikatu dotyczącego plików cookies po wejściu na stronę, jeśli akceptacja cookies następuje z poziomu przeglądarki: Strona wykorzystuje pliki cookies w celu jej prawidłowego funkcjonowania oraz w celach korzystania z narzędzi społecznościowych (Facebook, Instagram), analitycznych (Google Analytics), marketingowych (Piksel Facebooka). Możesz w każdej chwili określić warunki przechowywania lub dostępu do plików cookies we własnej przeglądarce. Jeśli będziesz korzystał z naszej strony bez zmiany w ustawieniach swojej przeglądarki, będziemy zapisywali i uzyskiwali dostęp do tych informacji (cookies) w pamięci Twojego urządzenia końcowego (komputer, telefon itp.) w wymienionych celach. Więcej informacji znajdziesz w naszej Polityce prywatności. Czy zgadzasz się na wykorzystywanie plików cookies? [Zgadzam się] [Polityka prywatności]

import CookieConsent, { Cookies } from "react-cookie-consent";

function CookieBar() {
  return (
    <>
      <CookieConsent
      disableButtonStyles={true}
      disableStyles={true}
        location="bottom"
        buttonText="Akceptuj"
        cookieName="myAwesomeCookieName2"
        // overlay
        style={{
          backgroundColor: "#202638",
          fontSize: "12px",
          lineHeight: "130%",
          padding: "20px",
          borderRadius: "10px",
          position: "fixed",
          bottom: 0,
          // width: "100%",
          zIndex: 9999,
          color: "white",
          display: "flex",
          justifyContent: "flex-start",
          margin: "10px 10px 10px 10px"
        }}
        buttonStyle={{
          color: "#FBF3E3",
          background: "#D76460",
          fontSize: "13px",
          borderRadius: "4px",
          border: "none",
          paddingBottom: "11px",
          paddingTop: "10px",
          cursor: "pointer"
        }}
        expires={150}
      >

        Strona wykorzystuje niezbędne pliki cookies w celu jej prawidłowego
        funkcjonowania. Przyczyniają się one do użyteczności
        strony poprzez umożliwianie podstawowych funkcji. Strona
        internetowa nie może funkcjonować poprawnie bez tych ciasteczek.
        Kliknięcie przycisku "Akceptuj" oznacza zgodę na wykorzystywanie
        niezbędnych plików cookie.<br/>

      </CookieConsent>
    </>
  );
}

export default CookieBar;


// takich jak nawigacja na
//         stronie i dostęp do bezpiecznych obszarów strony internetowej. 

// const buttonStyles = {
//     color: "#FBF3E3",
//     background: "#D76460",
//     fontSize: "13px",
//     borderRadius: "4px",
//     marginLeft: "150px",
//   };

//   const mediaQueryStyle = {
//     '@media (max-width: 768px)': {
//       marginLeft: "50px", // Adjusted margin for smaller screens
//     },
//   };

//   // Merge the styles based on the media query
//   const mergedStyles = { ...buttonStyles, ...mediaQueryStyle };

//   // In your component's JSX:
//   <button style={mergedStyles}>Your Button</button>
