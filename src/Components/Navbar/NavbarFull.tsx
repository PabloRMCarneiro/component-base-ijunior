import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Link from "../Link";
import Text from "../Text";
import Spacer from "../Spacer";

import logo from "./img/logo.png";
import homeIcon from "./img/homeIcon.png";
import dataBaseIcon from "./img/dataBaseIcon.png";
import calendarIcon from "./img/calendarIcon.png";

import NavbarShort from "./NavbarShort";

import {
  InternalContainerNavbar,
  CenterContainer,
  LineHorizontal,
  LinkContainerNavbar,
} from "../../utils/Containers";

function NavbarFull() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, getScreenWidth] = useState(window.innerWidth);
  const setScreenWidth = () => getScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    return () => window.removeEventListener("resize", setScreenWidth);
  }, []);

  useEffect(() => screenWidth < Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem")))*16 ? setIsMobile(true) : setIsMobile(false), [screenWidth]);

  return (
    <>
    {/* <div style={{ display: "flex" }}> */}
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
            </InternalContainerNavbar>
          </CenterContainer>
        </Box>
      )}
      {/* <MainContainer
        style={{
          backgroundColor: `${theme.colors.primary}`,
          width: `calc(100% - ${!isMobile ? '12.125' : '0'}rem)`,
        }}
        >
        <Button size="xs" color="sucess" hover>
        <Text variant="body2" bold>
        Hello World
        </Text>
        </Button>
      </MainContainer> */}
{/*     </div>   */}
    </>
  );
}

export default NavbarFull;
