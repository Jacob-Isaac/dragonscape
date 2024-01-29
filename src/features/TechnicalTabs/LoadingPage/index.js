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

import { Div } from "./styled";
import { StyledLoading, Wrapper } from "./styled";
import { selectIsLightMode } from "../../DataSlice/githubSlice";
import { useSelector } from "react-redux";

const LoadingPage = () => {
  const theme = useSelector(selectIsLightMode);
  return(
  <Div isLight={theme}>
    <Wrapper>
      <StyledLoading />
    </Wrapper>
  </Div>
  )

};

export default LoadingPage;
