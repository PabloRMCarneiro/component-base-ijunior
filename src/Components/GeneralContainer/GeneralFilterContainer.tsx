import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
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

          <LinkContainerGeneralFilterContainer>
            <Link path="/">
              <Text variant="body2" hover bold>
                Dados Gerais
              </Text>
            </Link>
            <BottomBarGeneralFIlterContainer color="primary" />
          </LinkContainerGeneralFilterContainer>

          <Spacer horizontal="8" />

          <Text variant="body2">Dados de clientes</Text>
          
          <Spacer horizontal="8" />
          
          <Text variant="body2">Informações da empresa</Text>
          
          <Spacer horizontal="8" />
          
          <Text variant="body2">Informações de parceiros</Text>
        
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
