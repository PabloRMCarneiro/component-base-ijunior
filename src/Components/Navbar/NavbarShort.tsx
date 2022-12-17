import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

import Box from "../Box";
import Link from "../Link";
import Text from "../Text";
import Spacer from "../Spacer";

import logo from "./img/logo.png";
import homeIcon from "./img/homeIcon.png";
import dataBaseIcon from "./img/dataBaseIcon.png";
import calendarIcon from "./img/calendarIcon.png";

import {
  InternalContainerNavbar,
  CenterContainer,
  LineHorizontal,
  LinkContainerNavbar,
  MainContainer,
} from "../../utils/Containers";
import { theme } from "../../styles/theme";

function NavbarShort() {

  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Box size="navbarShort" backgroundColor="white">
        <CenterContainer>
          <InternalContainerNavbar>
            <img src={logo} />
            <Spacer vertical="8" />
            <LineHorizontal />
            <Spacer vertical="10" />
            
            <LinkContainerNavbar style={{justifyContent: 'center'}}>
              <img 
                src={homeIcon} 
                style={{cursor: 'pointer'}} 
                onClick={() => navigate("/")}
              />
            </LinkContainerNavbar>

            <Spacer vertical="12" />

            <LinkContainerNavbar style={{justifyContent: 'center'}}>
              <img 
                src={dataBaseIcon} 
                style={{cursor: 'pointer'}} 
                onClick={() => navigate("/modal")}
              />
            </LinkContainerNavbar>

            <Spacer vertical="12" />

            <LinkContainerNavbar style={{justifyContent: 'center'}}>
              <img 
                src={calendarIcon} 
                style={{cursor: 'pointer'}} 
                onClick={() => navigate("/buttons")}
              />
            </LinkContainerNavbar>

          </InternalContainerNavbar>
        </CenterContainer>
      </Box>
    </>
  );
}

export default NavbarShort;