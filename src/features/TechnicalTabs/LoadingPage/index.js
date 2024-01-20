// import { Container } from "../../../styledComponents/Container/styled";
// import Content from "../../../styledComponents/Content";
// import { StyledLoading, Wrapper} from "./styled";

// const LoadingPage = () => (
//     <Container>
//         <Content 
//         body={
//             <Wrapper>
//             <StyledLoading/>
//             </Wrapper>
//         }/>
//     </Container>
// );

// export default LoadingPage;

import { Div } from './styled'; 
import { StyledLoading, Wrapper} from "./styled";


const LoadingPage = () => (
    <Div>   <Wrapper>
                <StyledLoading/>
                </Wrapper></Div>
  );

export default LoadingPage;