import { StyledGithubLogo, StyledInstagramLogo, StyledLinkedInLogo } from "../StyledLogos/styled";
import { IntroBlock, MyPhoto, ModeChange, Text, Mail, Article, HireMeButton, IconBody, Body, DarkMode, SocialMedia, SocialLink  } from "./styled";
import { ContainerFooter } from "../Container/styled";
import { ContactUs } from "../ContactForm/contact";

function Footer() {
  
  return (
    <ContainerFooter>
    <IntroBlock>
   <Text>Let's talk !</Text> 
     <Mail href="mailto:kontakt@dragonscape.pl">kontakt@dragonscape.pl</Mail> 
    <Article>We are going to open our site soon! If you have any questions or would like to receive a discount for the grand opening, feel free to reach out! Only a few will catch our introductory promotions!
    </Article> 
      <SocialMedia>
        {/* <SocialLink target="_blank" href="https://github.com/Jacob-Isaac"><StyledGithubLogo/></SocialLink>
        <SocialLink target="_blank" href="https://www.linkedin.com/in/jacob-nowakowski/"><StyledLinkedInLogo/></SocialLink>
        <SocialLink target="_blank" href="https://www.instagram.com/tricolor.art/"><StyledInstagramLogo/></SocialLink> */}
         <SocialLink><StyledGithubLogo/></SocialLink>
        <SocialLink><StyledLinkedInLogo/></SocialLink>
        <SocialLink><StyledInstagramLogo/></SocialLink> 
        </SocialMedia>
        <ContactUs/>
    </IntroBlock>
    </ContainerFooter>
  );
}

export default Footer;