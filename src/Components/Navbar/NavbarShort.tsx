import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

import Box from "../Box";
import Spacer from "../Spacer";

import logo from "./img/logo.png";
import homeIcon from "./img/homeIcon.png";
import dataBaseIcon from "./img/dataBaseIcon.png";
import calendarIcon from "./img/calendarIcon.png";

import { MdLogout } from "react-icons/md";

import {
  InternalContainerNavbar,
  CenterContainer,
  LineHorizontal,
  LinkContainerNavbar,
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
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <img
                src={homeIcon}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/general-container")}
              />
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <img
                src={dataBaseIcon}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate("/general-filter-container/dados-gerais")
                }
              />
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <img
                src={calendarIcon}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/buttons")}
              />
            </LinkContainerNavbar>
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <MdLogout
              size="1.5rem"
              color={theme.colors.greyDark}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </InternalContainerNavbar>
        </CenterContainer>
      </Box>
    </>
  );
}

export default NavbarShort;
