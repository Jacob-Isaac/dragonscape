import { Block, Title, Div, H1, P} from "./styled";
import { StyledList} from "../SkillsBlock/List/styled";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Element } from "react-scroll";
import './styles.css';

const SkillsBlock = () => {

 
  return (
    <Block>
       <StyledList>
         <Div>
           <H1>Zespół</H1>
           <P>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.</P>
         </Div>
         <Div>
           <H1>Podejście</H1>
           <P>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.</P>
         </Div>
         <Div>
           <H1>Kreatywność</H1>
           <P>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.</P>
         </Div>
       </StyledList>
       </Block>
  );
};

export default SkillsBlock;