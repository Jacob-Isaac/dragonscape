import React from "react";
import { NoResultContainer, StyledH1 } from "./styled";

function NoResult({ title, error404 }) {
  return (
    <>
      <StyledH1>Ooops</StyledH1>
      <NoResultContainer>
        <StyledH1>404<br/>
        Strona nie istnieje </StyledH1>
      </NoResultContainer>
    </>
  );
}

export default NoResult;
