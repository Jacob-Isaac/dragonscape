import { StyledGithubLogo, StyledInstagramLogo, StyledLinkedInLogo, StyledFacebookLogo } from "../../features/StyledLogos/styled";
import { IntroBlock, MyPhoto, ModeChange, Text, Mail, Phone, Article, HireMeButton, IconBody, Body, DarkMode, SocialMedia, SocialLink  } from "./styled";
import { ContainerFooter } from "../Container/styled";
import { ContactUs } from "./contact";

function ContactForm() {
  
  return (
    <ContainerFooter>
    <IntroBlock>
   <Text>skontaktujmy się !</Text> 
     <Mail href="mailto:kontakt@dragonscape.pl">kontakt@dragonscape.pl</Mail> 
     <Phone href="tel:+48732491732">(+48) 732 491 732</Phone> 
      <SocialMedia>
        
        {/* <SocialLink target="_blank" href="https://github.com/Jacob-Isaac"><StyledGithubLogo/></SocialLink>
        <SocialLink target="_blank" href="https://www.linkedin.com/in/jacob-nowakowski/"><StyledLinkedInLogo/></SocialLink>
        <SocialLink target="_blank" href="https://www.instagram.com/tricolor.art/"><StyledInstagramLogo/></SocialLink> */}
         <SocialLink href="https://www.facebook.com/staryskneraf1"><StyledFacebookLogo/></SocialLink>
        <SocialLink href="https://www.facebook.com/TwojaNazwaStrony"><StyledLinkedInLogo/></SocialLink>
        <SocialLink href="https://www.facebook.com/TwojaNazwaStrony"><StyledInstagramLogo/></SocialLink> 
        </SocialMedia>
        <Article>Identyfikacja wizualna, projekty graficzne, logo, design, strona www - jaka jest Twoja potrzeba? Napisz do nas, ustalimy co jest dla Ciebie ważne! 
    </Article> 
        <ContactUs/>
    </IntroBlock>
    </ContainerFooter>
  );
}

export default ContactForm;