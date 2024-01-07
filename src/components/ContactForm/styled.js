import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

export const IntroBlock = styled.div`
  max-height: 404px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.color.text};
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
  }
`;

export const Mail = styled.a`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.titleAndIcons};
  text-decoration: none;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  &:hover {
    color: ${({ theme }) => theme.color.mainBlue};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Phone = styled.a`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.titleAndIcons};
  text-decoration: none;
  font-weight: 900;
  font-size: 28px;
  line-height: 46px;
  letter-spacing: 0.05em;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  &:hover {
    color: ${({ theme }) => theme.color.mainBlue};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Article = styled.article`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.titleAndIcons};
  text-align: justify;
  margin-top: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  cursor: default;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
  margin-right: 40px;
`;

//contact

export const StyledReCAPTCHA = styled(ReCAPTCHA)`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const StyledContactForm = styled.div`
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
    span {
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

export const SuccessMessage = styled.div`
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