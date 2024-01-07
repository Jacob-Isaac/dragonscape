import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { SuccessMessage, StyledReCAPTCHA, StyledContactForm } from "./styled";

export const ContactUs = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [capVal, setCapVal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const charLimit = 999;
  const [errorMessage, setErrorMessage] = useState("");
  const [hideMessage, setHideMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    emailjs
      .sendForm(
        "service_iw0l0ey",
        "template_dn5fa7q",
        form.current,
        "GqBkFhyoNtwuAiV0c"
      )
      .then(
        (result) => {
          console.log(result.text);
          recaptchaRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setHideMessage(true);
      setTimeout(() => {
        setShowSuccess(false);
        setHideMessage(false);
      }, 500);
    }, 5000);
    setErrorMessage("");
    setCapVal(null);
    form.current.reset();
    e.target.reset();
    StyledReCAPTCHA.reset();
  };
  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Imię</label>
        <input type="text" name="user_name" />
        <label>Email*</label>
        <input type="email" name="user_email" required />
        <label>Treść wiadomości*</label>
        <textarea
          maxLength={charLimit}
          placeholder={`Napisz do nas :) (limitowane do ${charLimit} znaków)`}
          name="message"
          required
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <input disabled={!capVal} type="submit" value="Porozmawiajmy" />
        <StyledReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lc1JBIpAAAAALdAHI1JDGErBDUkfU85kv63879P"
          onChange={(val) => setCapVal(val)}
        />
      </form>
      {showSuccess && (
        <SuccessMessage hide={hideMessage}>
          <p>Sukces! Formularz został wysłany.</p>
        </SuccessMessage>
      )}
    </StyledContactForm>
  );
};
