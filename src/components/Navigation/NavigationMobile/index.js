import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  WrapperUl,
  Input,
  Input2,
  Content,
  ContentTitle,
  MenuButton,
  Close,
  LabelSpan,
  MarginBottom,
  NavBar,
  Button,
  Span,
  StyledNavLink,
} from "./styled.js";
import { fetchGithubData, selectIsBodyOverflowHidden, toggleBodyOverflow } from "../../../features/DataSlice/githubSlice";
import { useDispatch } from "react-redux";
import LoadingPage from "../../../features/TechnicalTabs/LoadingPage/index.js";
import ErrorPage from "../../../features/TechnicalTabs/ErrorPage/index.js";
import { useSelector } from "react-redux";
import { selectLoadingState } from "../../../features/DataSlice/githubSlice";



const HeaderMobile = ({ contentTitle, isBodyOverflowHidden }) => {
  const ifLoading = useSelector(selectLoadingState);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [something, setSomething] = useState(false);

  const toggle = () => {
    setChecked(!checked);
    dispatch(toggleBodyOverflow());
    console.log(isBodyOverflowHidden);
  };

 const handleNavLinkClick = () => {
    dispatch(toggleBodyOverflow());
  };

  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = <LoadingPage />;
      break;
    case "success":
      returned = (
        <>
        <NavBar>
        <Input type="checkbox" id="active" onChange={toggle} />
          <MenuButton htmlFor="active">
          {/* <LabelSpan checked={checked}></LabelSpan> */}
          </MenuButton>
          <Close htmlFor="active"></Close>
          <Wrapper>
            <WrapperUl>
              <label htmlFor="active">
                <li>
                <NavLink to="/">
                <Button Mobile>start</Button>
                   </NavLink> 
                </li>
                <li>
                <NavLink to="/offer" >
                  <Button Mobile>
                    <Span>oferta</Span>
                  </Button>
                  </NavLink> 
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
                  <NavLink to="/author">
                    <Button Mobile>Cośtam</Button>
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
      break;
    case "error":
      returned = <ErrorPage />;
      break;
    default:
      returned = <LoadingPage />;
  }

  return returned;
};

export default HeaderMobile;
