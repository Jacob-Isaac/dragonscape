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
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  font-weight: 700;
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
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.galaxyFoldPlus}px) {
    font-size: 18px;
  }
`;

export const PhoneWrapper = styled.span`

  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
  font-size: 20px;
  line-height: 46px;
  letter-spacing: 0.05em;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`; 

export const Phone = styled.a`
 text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
  font-size: 24px;
  line-height: 46px;
  letter-spacing: 0.05em;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
  &:hover {
    color: ${({ theme }) => theme.color.mainBlue};
  }


`;

export const Article = styled.article`
  font-size: 18px;
  color: ${({ theme }) => theme.color.text};
  text-align: justify;
  margin-top: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 30px;
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
  @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
   max-width: 190px;
  }

`;

export const StyledContactForm = styled.div`

  max-width: 550px;
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
      @media (max-width: ${({ theme }) => theme.breakpoint.mobilefive}px) {
 resize: none;
  }
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 280px;
      min-height: 160px;
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
      background: ${({ theme }) => theme.color.dragonRed};
      color: ${({ theme }) => theme.color.dragonWhite};
      border: none;
      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
     width: 50%; 
     margin: 2rem auto;
     padding:15px;
      padding-bottom: 33px;
      text-align: center;
  }
  transition: 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.color.buttonShadow};
    cursor: pointer;
  }
    }
  }
`;

export const SuccessMessage = styled.div`
color: ${({ theme }) => theme.color.dragonBlack};
  position: fixed;
  top: 80%; 
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

export const CaptchaMessage = styled.div`
color: ${({ theme }) => theme.color.dragonBlack};
position: relative;
margin-top: -30px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 200px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;