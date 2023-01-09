import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";

import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Link from "../Link";
import Text from "../Text";
import Spacer from "../Spacer";

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
                <ImDatabase
                  style={{
                    cursor: "pointer",
                    width: "1.6rem",
                    height: "1.6rem",
                  }}
                  color={theme.colors.primary}
                  onClick={() =>
                    navigate("/general-filter-container/dados-gerais")
                  }
                />
                <Spacer horizontal="6" />
                <Link path="/general-filter-container/dados-gerais">
                  <Text variant="legenda" color="greyDark" hover bold>
                    General Filter Container
                  </Text>
                </Link>
                {location.pathname.indexOf("general-filter-container") !==
                  -1 && <LineVertical color="primary" weight="4" />}
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
    </>
  );
}

export default NavbarFull;
