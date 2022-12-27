import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "./img/Logo.png";

import Box from "../Box";
import Text from "../Text";
import Button from "../Button";
import Link from "../Link";
import Spacer from "../Spacer";

import {
  InternalContainerTopbar,
  CenterContainerFlex,
  LinkCotainerTopbar,
  BottomBarTopbar,
  CenterContainer,
} from "../../utils/Containers";

import Login from "../AccessContainer/Login/Login";

export var topBarMobileExport: boolean = false; // export variable to use in other father components for expand MobileTopbar

function TopbarFull() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTopBarMobile = () => {
    topBarMobileExport = true
  };
  
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, getScreenWidth] = useState(window.innerWidth);
  const setScreenWidth = () => getScreenWidth(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    return () => window.removeEventListener("resize", setScreenWidth);
  }, []);
  
  useEffect(
    () =>
      {
        if( screenWidth < Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *16) setIsMobile(true)
        else setIsMobile(false)
        
      },

    [screenWidth]
  );

  return (
    <>
      <GlobalStyle />
      <Box size="topbarFull" backgroundColor="greyLight" fixed>
        <InternalContainerTopbar>
          <CenterContainerFlex>
            <img
              src={Logo}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </CenterContainerFlex>
          {!isMobile ? (
            <CenterContainerFlex>
              {location.pathname.indexOf("short") !== -1 ? (
                <LinkCotainerTopbar>
                  <Link path="/">
                    <Text variant="body2" hover bold>
                      Short
                    </Text>
                  </Link>
                  <BottomBarTopbar color="primary" />
                </LinkCotainerTopbar>
              ) : (
                <Link path="/">
                  <Text variant="body2" hover>
                    Short
                  </Text>
                </Link>
              )}
              <Spacer horizontal="9" />
              {location.pathname.indexOf("full") !== -1 ? (
                <LinkCotainerTopbar>
                  <Link path="/">
                    <Text variant="body2" hover bold>
                      Full
                    </Text>
                  </Link>
                  <BottomBarTopbar color="primary" />
                </LinkCotainerTopbar>
              ) : (
                <Link path="/">
                  <Text variant="body2" hover>
                    Full
                  </Text>
                </Link>
              )}
              <Spacer horizontal="9" />
              {location.pathname.indexOf("example") !== -1 ? (
                <LinkCotainerTopbar>
                  <Link path="/">
                    <Text variant="body2" hover bold>
                      Exemplo
                    </Text>
                  </Link>
                  <BottomBarTopbar color="primary" />
                </LinkCotainerTopbar>
              ) : (
                <Link path="/">
                  <Text variant="body2" hover>
                    Exemplo
                  </Text>
                </Link>
              )}
              <Spacer horizontal="20" />
              <Button size="sm" color="primary" bordered hover>
                <Text variant="body2" bold>
                  Login
                </Text>
              </Button>
              <Spacer horizontal="9" />
              <Link path="/">
                <Text variant="body2" color="primaryBorder" bold>
                  Cadastro
                </Text>
              </Link>
            </CenterContainerFlex>
          ) : (
            <CenterContainerFlex>
              <GiHamburgerMenu 
                size="1.5rem" 
                color={theme.colors.primary}
                onClick={handleTopBarMobile}
                style={{ cursor: "pointer" }}
              />
              <Spacer horizontal="10"/>
            </CenterContainerFlex>
          )}
        </InternalContainerTopbar>
      </Box>
      {/* just to exemplify after the Center Container component is not to be in the TopBar */}
      {/* <CenterContainer style={{ backgroundColor: `${theme.colors.offWhite}` }}>
        <Login />
      </CenterContainer> */}
    </>
  );
}

export default TopbarFull;
