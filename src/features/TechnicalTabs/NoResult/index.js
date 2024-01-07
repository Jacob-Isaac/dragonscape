import React from "react";
import { NoResultContainer, StyledH1 } from "./styled";

function NoResult({ title, error404 }) {
  return (
    <>
      <StyledH1>{title}</StyledH1>
      <NoResultContainer>
        <StyledH1>{error404}</StyledH1>
      </NoResultContainer>
    </>
  );
}

export default NoResult;
