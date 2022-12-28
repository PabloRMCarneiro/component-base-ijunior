import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";

import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Link from "../Link";
import Text from "../Text";
import Spacer from "../Spacer";

import logo from "./img/logo.png";
import homeIcon from "./img/homeIcon.png";
import dataBaseIcon from "./img/dataBaseIcon.png";
import calendarIcon from "./img/calendarIcon.png";

import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import NavbarShort from "./NavbarShort";

import {
  InternalContainerNavbar,
  CenterContainer,
  LineHorizontal,
  LinkContainerNavbar,
  FooterContainerNavbar,
  InternalFooterContainerNavbar,
  LineVertical,
} from "../../utils/Containers";

function NavbarFull() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const screen = useScreen();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(
    () =>
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
        ? setIsMobile(true)
        : setIsMobile(false),
    [screen]
  );

  return (
    <>
      <GlobalStyle />
      {isMobile ? (
        <NavbarShort />
      ) : (
        <Box size="navbarFull" backgroundColor="white">
          <CenterContainer>
            <InternalContainerNavbar>
              <img src={logo} />
              <Spacer vertical="8" />
              <LineHorizontal />
              <Spacer vertical="10" />
              <LinkContainerNavbar>
                <Spacer horizontal="4" />
                <img
                  src={homeIcon}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/general-container")}
                />
                <Spacer horizontal="4" />
                <Link path="/general-container">
                  <Text variant="legenda" color="greyDark" hover bold>
                    General Container
                  </Text>
                </Link>
                {location.pathname.indexOf("general-container") !== -1 && (
                  <LineVertical color="primary" weight="4" />
                )}
              </LinkContainerNavbar>
              <Spacer vertical="12" />
              <LinkContainerNavbar>
                <Spacer horizontal="6" />
                <img
                  src={dataBaseIcon}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/general-filter-container/dados-gerais")}
                />
                <Spacer horizontal="6" />
                <Link path="/general-filter-container/dados-gerais">
                  <Text variant="legenda" color="greyDark" hover bold>
                    General Filter Container
                  </Text>
                </Link>
                {location.pathname.indexOf("general-filter-container") !== -1 && (
                  <LineVertical color="primary" weight="4" />
                )}
              </LinkContainerNavbar>
              <Spacer vertical="12" />
              <LinkContainerNavbar>
                <Spacer horizontal="4" />
                <img
                  src={calendarIcon}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/buttons")}
                />
                <Spacer horizontal="4" />
                <Link path="/buttons">
                  <Text variant="legenda" color="greyDark" hover bold>
                    Buttons
                  </Text>
                </Link>
              </LinkContainerNavbar>
              <Spacer vertical="40" />
              <Spacer vertical="40" />
              <Spacer vertical="40" />
              <Spacer vertical="40" />
              <FooterContainerNavbar>
                <FaUserCircle
                  size="1.66rem"
                  color={theme.colors.greyDarkLightHover}
                />
                <Spacer horizontal="4" />
                <InternalFooterContainerNavbar>
                  <Text variant="legenda" color="greyDark" bold>
                    Nome do Usuário
                  </Text>
                  <Link path="/">
                    <Text variant="legenda2" color="greyDark" hover>
                      Ver perfil
                    </Text>
                  </Link>
                </InternalFooterContainerNavbar>
                <Spacer horizontal="5" />
                <MdLogout
                  size="1rem"
                  color={theme.colors.grey}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                />
              </FooterContainerNavbar>
            </InternalContainerNavbar>
          </CenterContainer>
        </Box>
      )}
    </>
  );
}

export default NavbarFull;
