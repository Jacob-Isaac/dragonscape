import { Container } from "../Container/styled";
import Content from "../Content";
import { StyledLoading, Wrapper, Message } from "./styled";
import { StyledGithubLogo } from "../Offer/OfferTiles/styled";



const LoadingPage = () => (
    <Container>
        <Content
        //  icon = {<StyledGithubLogo/>} 
        //  title= {"Portfolio"}
        //  subtitle = {"My recent projects"}  
        body={
            <Wrapper>
            <StyledLoading/>
            </Wrapper>
        }/>
    </Container>
);

export default LoadingPage;