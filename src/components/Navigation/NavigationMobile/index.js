import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  WrapperUl,
  Input,
  Content,
  ContentTitle,
  MenuButton,
  Close,
  LabelSpan,
  MarginBottom,
  NavBar,
  Button,
  Span,
} from "./styled.js";

const HeaderMobile = ({ contentTitle }) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);

  return (
    <>
      <NavBar>
        <Input type="checkbox" id="active" onChange={toggle} />
        <MenuButton htmlFor="active">
          <LabelSpan checked={checked}></LabelSpan>
        </MenuButton>
        <Close htmlFor="active"></Close>
        <Wrapper>
          <WrapperUl>
            <label htmlFor="active">
              <li>
                <NavLink exact to="/zadania">
                  <Button Mobile>start</Button>
                </NavLink>
              </li>
              <li>
                <Button Mobile>
                  <Span>oferta</Span>
                </Button>
              </li>

              <li>
                <Button Mobile>
                 <Span Red Mobile>wycena</Span>
                </Button>
              </li>

              <li>
                <Button Mobile>
                 <Span Mobile>o nas</Span>
                </Button>
              </li>

              <li>
                <Button Mobile>
                    <Span Mobile>
                    kontakt
                    </Span>
                </Button>
              </li>
              <li>
                <NavLink exact to="/author">
                  <Button Mobile>...</Button>
                </NavLink>
              </li>
            </label>
          </WrapperUl>
        </Wrapper>
        <Content>
          <ContentTitle>{contentTitle}</ContentTitle>
        </Content>
      </NavBar>
      <MarginBottom />
    </>
  );
};

export default HeaderMobile;
