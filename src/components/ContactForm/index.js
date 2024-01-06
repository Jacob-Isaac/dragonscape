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
} from "./styled";
import { ContainerFooter } from "../../styledComponents/Container/styled";
import { ContactUs } from "./contact";

function ContactForm() {
  return (
    <ContainerFooter>
      <IntroBlock>
        <Text>skontaktujmy się !</Text>
        <Mail href="mailto:kontakt@dragonscape.pl">kontakt@dragonscape.pl</Mail>
        <Phone href="tel:+48732491732">(+48) 732 491 732</Phone>
        <SocialMedia>
          <SocialLink href="https://www.facebook.com/staryskneraf1">
            <StyledFacebookLogo />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/TwojaNazwaStrony">
            <StyledLinkedInLogo />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/TwojaNazwaStrony">
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
    </ContainerFooter>
  );
}

export default ContactForm;
