import {
    ErrorContainer,
    Title,
    Text,
    Button,
    StyledDangerIcon,
  } from "./styled";
  
  function ErrorPage() {
    return (
        <ErrorContainer>
        <StyledDangerIcon />
        <Title>Ooops! Something went wrong...</Title>
        <Text>
        Sorry, failed to load content. Please, come back later!
        </Text>
        <Button href="https://dragonscape.pl">Go to Homepage</Button>
        </ErrorContainer>
    );
  }
  
  export default ErrorPage;
  