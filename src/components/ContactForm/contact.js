import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { SuccessMessage, StyledReCAPTCHA, StyledContactForm, CaptchaMessage } from "./styled";

export const ContactUs = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [capVal, setCapVal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
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
    setSubmitButtonClicked(false);
    // StyledReCAPTCHA.reset();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (capVal) {
      sendEmail(e);
    } else {
      setSubmitButtonClicked(true);
    }
  };


    const handleChange = (event) => {
  
        if (window.innerWidth <= 700) {
          event.target.style.height = 'auto';
          event.target.style.height = event.target.scrollHeight + 'px';
      }
    };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={handleFormSubmit}>
        <span> </span>
        <input type="text" name="user_name" placeholder={"Imię"} />
        <span> </span>
        <input
          type="email"
          name="user_email"
          placeholder={"Email*"}
          required
        />
        <span> </span>
        <textarea
          maxLength={charLimit}
          placeholder={`Napisz do nas :) (limitowane do ${charLimit} znaków)`}
          name="message"
          onChange={handleChange}
          required
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <input
          type="submit"
          value={showSuccess ? "Sukces!" : "Porozmawiajmy"}
        />
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
      {submitButtonClicked && !capVal && (
        <CaptchaMessage hide={hideMessage}>
          <p>Wypełnij Captcha!</p>
        </CaptchaMessage>
      )}
    </StyledContactForm>
  );
};