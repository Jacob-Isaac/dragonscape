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
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState,
} from "../../features/DataSlice/dataSlice";
import LoadingPage from "../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../features/TechnicalTabs/ErrorPage";

function ContactForm() {
  const dispatch = useDispatch();
  const ifLoading = useSelector(selectLoadingState);

  useEffect(() => {
    dispatch(fetchGithubData());
  }, [dispatch]);

  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);
  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);
  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);
  const count4 = useMotionValue(0);
  const rounded4 = useTransform(count4, Math.round);
  const count5 = useMotionValue(0);
  const rounded5 = useTransform(count5, Math.round);
  const count6 = useMotionValue(0);
  const rounded6 = useTransform(count6, Math.round);

  useEffect(() => {
    const animation1 = animate(count1, 732, { duration: 2.5 });
    const animation2 = animate(count2, 491, { duration: 3 });
    const animation3 = animate(count3, 732, { duration: 2.5 });
    const animation4 = animate(count4, 723, { duration: 3 });
    const animation5 = animate(count5, 887, { duration: 2.5 });
    const animation6 = animate(count6, 699, { duration: 2.5 });
    return () => {
      animation1.stop();
      animation2.stop();
      animation3.stop();
      animation4.stop();
      animation5.stop();
      animation6.stop();
    };
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
            <PhoneWrapper>Design: <Phone href="tel:+48732491732"> <span style={{ display: 'inline-block', marginRight: '7px' }}>(+48)</span><motion.span style={{ display: 'inline-block', marginRight: '7px' }}>{rounded1}</motion.span>
                <motion.span style={{ display: 'inline-block', marginRight: '7px' }}>{rounded2}</motion.span>
                <motion.span style={{ display: 'inline-block' }}>{rounded3}</motion.span></Phone></PhoneWrapper>
            <PhoneWrapper>Web: <Phone href="tel:+48723887699"> <span style={{ display: 'inline-block', marginRight: '7px' }}>(+48)</span><motion.span style={{ display: 'inline-block', marginRight: '7px' }}>{rounded4}</motion.span>
                <motion.span style={{ display: 'inline-block', marginRight: '7px' }}>{rounded5}</motion.span>
                <motion.span style={{ display: 'inline-block' }}>{rounded6}</motion.span></Phone></PhoneWrapper>
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
      returned = <LoadingPage />;
  }

  return returned;
}

export default ContactForm;