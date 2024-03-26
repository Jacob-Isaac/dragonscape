import { Div } from "./styled";
import { StyledLoading, Wrapper } from "./styled";
import { selectIsLightMode, selectIsNoonMode } from "../../DataSlice/dataSlice";
import { useSelector } from "react-redux";

const LoadingPage = () => {
  const theme = useSelector(selectIsLightMode);
  const noonMode = useSelector(selectIsNoonMode);

  return(
  <Div isLight={theme}  isNoon={noonMode} >
    <Wrapper>
      <StyledLoading isLight={theme}/>
    </Wrapper>
  </Div>
  )

};

export default LoadingPage;
