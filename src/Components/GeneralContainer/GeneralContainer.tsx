import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Link from "../Link";
import Text from "../Text";
import Spacer from "../Spacer";

import { BiArrowBack } from "react-icons/bi";

import logo from "../Navbar/img/logo.png";
import homeIcon from "../Navbar/img/homeIcon.png";
import dataBaseIcon from "../Navbar/img/dataBaseIcon.png";
import calendarIcon from "../Navbar/img/calendarIcon.png";

import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import NavbarShort from "../Navbar/NavbarShort";

import {
  InternalContainerNavbar,
  CenterContainer,
  LineHorizontal,
  LinkContainerNavbar,
  FooterContainerNavbar,
  InternalFooterContainerNavbar,
  MainContainer,
  TitleGeneralContainer,
  ContentGeneralContainer,
} from "../../utils/Containers";

function GeneralContainer() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, getScreenWidth] = useState(window.innerWidth);
  const setScreenWidth = () => getScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    return () => window.removeEventListener("resize", setScreenWidth);
  }, []);

  useEffect(
    () =>
      screenWidth <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
        ? setIsMobile(true)
        : setIsMobile(false),
    [screenWidth]
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
              <img src={logo} />
              <Spacer vertical="8" />
              <LineHorizontal />
              <Spacer vertical="10" />
              <LinkContainerNavbar>
                <Spacer horizontal="4" />
                <img
                  src={homeIcon}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                />
                <Spacer horizontal="4" />
                <Link path="/">
                  <Text variant="legenda" color="greyDark" hover bold>
                    Home
                  </Text>
                </Link>
              </LinkContainerNavbar>

              <Spacer vertical="12" />

              <LinkContainerNavbar>
                <Spacer horizontal="6" />
                <img
                  src={dataBaseIcon}
                  style={{ cursor: "pointer" }}
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
      <MainContainer
        style={{
          backgroundColor: `${theme.colors.offWhite}`,
          width: `calc(100% - ${!isMobile ? "14.125" : "0"}rem)`,
        }}
      >
        <TitleGeneralContainer>
          <Text variant="h3" bold>
            Title General Container
          </Text>
        </TitleGeneralContainer>
        <Spacer vertical="4" />
        <Box
          size="generalContainer"
          backgroundColor="bgLogin"
          rounded
          shadow="accessContainer"
        >
          <ContentGeneralContainer>

          <BiArrowBack
            style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
            color={theme.colors.grey}
            onClick={() => navigate("/")}
          />
          </ContentGeneralContainer>
        </Box>
      </MainContainer>
    </div>
  );
}

export default GeneralContainer;