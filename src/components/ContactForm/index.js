import {
  StyledInstagramLogo,
  StyledLinkedInLogo,
  StyledFacebookLogo,
} from "../../styledComponents/StyledLogos/styled";
import {
  IntroBlock,
  Text,
  Mail,
  Phone,
  Article,
  SocialMedia,
  SocialLink,
  PhoneWrapper,
} from "./styled";
import { ContainerContact } from "../../styledComponents/Container/styled";
import { ContactUs } from "./contact";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLightMode } from "../../features/DataSlice/githubSlice";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
} from "../../features/DataSlice/githubSlice";
import LoadingPage from "../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../features/TechnicalTabs/ErrorPage";

function ContactForm() {

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
    <ContainerContact>
      <IntroBlock>
        <Text>skontaktujmy się !</Text>
        <Mail href="mailto:kontakt@dragonscape.pl">kontakt@dragonscape.pl</Mail>
      <PhoneWrapper>Design: <Phone href="tel:+48732491732">(+48) 732 491 732</Phone></PhoneWrapper> 
      <PhoneWrapper>Web: <Phone href="tel:+48723887699">(+48) 723 887 699</Phone></PhoneWrapper> 
        <SocialMedia>
          <SocialLink href="https://www.facebook.com/dragonscapePL" target="_blank">
            <StyledFacebookLogo />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/company/dragonscape/" target="_blank">
            <StyledLinkedInLogo />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/dragonscapepl/" target="_blank">
            <StyledInstagramLogo />
          </SocialLink>
        </SocialMedia>
        <Article>
          Identyfikacja wizualna, projekty graficzne, logo, design, strona www -
          jaka jest Twoja potrzeba? Napisz do nas, ustalimy co jest dla Ciebie
          ważne!
        </Article>
        <ContactUs />
      </IntroBlock>
    </ContainerContact>
  );
  break;
  case "error":
    returned = <ErrorPage />;
    break;
  default:
    returned = <LoadingPage/>;
}

return returned;
}

export default ContactForm;