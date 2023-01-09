import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";

import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Link from "../Link";
import Text from "../Text";
import Spacer from "../Spacer";
import Button from "../Button";


import { FaUserCircle, FaReact } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { ImDatabase, ImCalendar } from "react-icons/im";

import NavbarShort from "./NavbarShort";

import {
  InternalContainerNavbar,
  CenterContainer,
  LineHorizontal,
  LinkContainerNavbar,
  FooterContainerNavbar,
  InternalFooterContainerNavbar,
  MainContainer,
} from "../../utils/Containers";

function NavbarExample() {
  const navigate = useNavigate();
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
    <div style={{ display: "flex" }}>
      <GlobalStyle />
      {isMobile ? (
        <NavbarShort />
      ) : (
        <Box size="navbarFull" backgroundColor="white">
          <CenterContainer>
            <InternalContainerNavbar>
              <FaReact
                style={{
                  cursor: "pointer",
                  width: "5rem",
                  height: "5rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/")}
              />
              <Spacer vertical="8" />
              <LineHorizontal />
              <Spacer vertical="10" />
              <LinkContainerNavbar>
                <Spacer horizontal="4" />
                <BsHouse
                  style={{
                    cursor: "pointer",
                    width: "1.875rem",
                    height: "1.875rem",
                  }}
                  color={theme.colors.primary}
                  onClick={() => navigate("/general-container")}
                />
                <Spacer horizontal="4" />
                <Link path="/general-container">
                  <Text variant="legenda" color="greyDark" hover bold>
                    Home
                  </Text>
                </Link>
              </LinkContainerNavbar>
              <Spacer vertical="12" />
              <LinkContainerNavbar>
                <Spacer horizontal="6" />
                <ImDatabase
                  style={{
                    cursor: "pointer",
                    width: "1.6rem",
                    height: "1.6rem",
                  }}
                  color={theme.colors.primary}
                  onClick={() => navigate("/modal")}
                />
                <Spacer horizontal="6" />
                <Link path="/modal">
                  <Text variant="legenda" color="greyDark" hover bold>
                    Modais
                  </Text>
                </Link>
              </LinkContainerNavbar>
              <Spacer vertical="12" />
              <LinkContainerNavbar>
                <Spacer horizontal="4" />
                <ImCalendar
                  style={{
                    cursor: "pointer",
                    width: "1.875rem",
                    height: "1.875rem",
                  }}
                  color={theme.colors.primary}
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
      <MainContainer
        style={{
          backgroundColor: `${theme.colors.primary}`,
          width: `calc(100% - ${!isMobile ? "14.125" : "0"}rem)`,
        }}
      >
        <Button size="xs" color="success" hover>
          <Text variant="body2" bold>
            Hello World
          </Text>
        </Button>
        <Spacer vertical="8" />
        <Button size="xs" color="danger" hover>
          <Text variant="body2" bold>
            Hello World
          </Text>
        </Button>
        <Spacer vertical="8" />
        <Button size="xs" color="warning" hover bordered>
          <Text variant="body2" bold>
            Hello World
          </Text>
        </Button>
      </MainContainer>
    </div>
  );
}

export default NavbarExample;
