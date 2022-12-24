import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";

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

function TopbarFull() {
  const navigate = useNavigate();
  const location = useLocation();

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
          <CenterContainerFlex>
            {location.pathname.indexOf("short") !== -1 ? (
              <LinkCotainerTopbar>
                <Text variant="body2" hover bold>
                  Short
                </Text>
                <BottomBarTopbar color="primary" />
              </LinkCotainerTopbar>
            ) : (
              <Text variant="body2" hover>
                Short
              </Text>
            )}
            <Spacer horizontal="9" />
            {location.pathname.indexOf("full") !== -1 ? (
              <LinkCotainerTopbar>
                <Text variant="body2" hover bold>
                  Full
                </Text>
                <BottomBarTopbar color="primary" />
              </LinkCotainerTopbar>
            ) : (
              <Text variant="body2" hover>
                Full
              </Text>
            )}
            <Spacer horizontal="9" />
            {location.pathname.indexOf("example") !== -1 ? (
              <LinkCotainerTopbar>
                <Text variant="body2" hover bold>
                  Exemplo
                </Text>
                <BottomBarTopbar color="primary" />
              </LinkCotainerTopbar>
            ) : (
              <Text variant="body2" hover>
                Exemplo
              </Text>
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
        </InternalContainerTopbar>
      </Box>
      {/* just to exemplify after the Center Container component is not to be in the TopBar */}
      <CenterContainer style={{backgroundColor: `${theme.colors.offWhite}`}}>
        <Login/>
      </CenterContainer>
    </>
  );
}

export default TopbarFull;
