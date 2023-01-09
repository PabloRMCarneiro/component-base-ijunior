import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";

import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Text from "../Text";
import Spacer from "../Spacer";

import { BiArrowBack } from "react-icons/bi";

import {
  MainContainer,
  TitleGeneralContainer,
  ContentGeneralContainer,
} from "../../utils/Containers";

import NavbarFull from "../Navbar/NavbarFull";

function GeneralContainer() {
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
      <NavbarFull />
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
          backgroundColor="backgroundBox"
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
