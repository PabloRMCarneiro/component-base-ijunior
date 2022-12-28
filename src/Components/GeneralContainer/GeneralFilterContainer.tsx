import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Text from "../Text";
import Spacer from "../Spacer";
import Link from "../Link";

import { BiArrowBack } from "react-icons/bi";

import {
  MainContainer,
  TitleGeneralContainer,
  TopContainerGeneralFilterContainer,
  LinkContainerGeneralFilterContainer,
  BottomBarGeneralFIlterContainer,
} from "../../utils/Containers";

import NavbarFull from "../Navbar/NavbarFull";

function GeneralFilterContainer() {
  const navigate = useNavigate();
  const location = useLocation();

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
      <NavbarFull />
      <MainContainer
        style={{
          backgroundColor: `${theme.colors.offWhite}`,
          width: `calc(100% - ${!isMobile ? "14.125" : "0"}rem)`,
        }}
      >
        <TitleGeneralContainer>
          {location.pathname.indexOf("dados-gerais") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/dados-gerais">
                <Text variant="body2" hover bold>
                  Dados Gerais
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/dados-gerais">
              <Text variant="body2" hover>
                Dados Gerais
              </Text>
            </Link>
          )}

          <Spacer horizontal="8" />
          
          {location.pathname.indexOf("dados-clientes") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/dados-clientes">
                <Text variant="body2" hover bold>
                  Dados de clientes
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/dados-clientes">
              <Text variant="body2" hover>
                Dados de clientes
              </Text>
            </Link>
          )}

          <Spacer horizontal="8" />

          {location.pathname.indexOf("informacoes-empresa") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/informacoes-empresa">
                <Text variant="body2" hover bold>
                  Informações da empresa
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/informacoes-empresa">
              <Text variant="body2" hover>
                Informações da empresa
              </Text>
            </Link>
          )}
          
          <Spacer horizontal="8" />
          
          {location.pathname.indexOf("informacoes-parceiros") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/informacoes-parceiros">
                <Text variant="body2" hover bold>
                  Informações da parceiros
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/informacoes-parceiros">
              <Text variant="body2" hover>
                Informações da parceiros
              </Text>
            </Link>
          )}
        </TitleGeneralContainer>
        <Spacer vertical="8" />
        <Box
          size="generalContainerFilter"
          backgroundColor="bgLogin"
          rounded
          shadow="accessContainer"
        ></Box>
        <Spacer vertical="12" />
        <Box
          size="generalContainerFilterMain"
          backgroundColor="bgLogin"
          rounded
          shadow="accessContainer"
        ></Box>
      </MainContainer>
    </div>
  );
}

export default GeneralFilterContainer;
