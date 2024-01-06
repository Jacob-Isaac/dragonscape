import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import styled from "styled-components";

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
    StyledReCAPTCHA.reset()
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
          maxlength={charLimit}
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
        <SuccessMessage  hide={hideMessage}>
          <p>Sukces! Formularz został wysłany.</p>
          </SuccessMessage>
      )} 
    </StyledContactForm>
  );
};

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  margin-top: 30px;
  margin-bottom: 50px;
`;
const StyledContactForm = styled.div`
  width: 400px;
  margin-top: 10px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      margin-bottom: 5px;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 20px; 
  right: 20px; 
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  animation-name: ${({ hide }) => (hide ? 'slideOut' : 'slideIn')};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
`;