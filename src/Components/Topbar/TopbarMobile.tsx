import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Button from "../Button";
import Spacer from "../Spacer";
import Text from "../Text";
import Link from "../Link";

import { AiOutlineClose } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

import {
  ContentGeneralContainer,
  TopContainerTopBarMobile,
  LineHorizontal,
} from "../../utils/Containers";

interface TopbarMobileProps {
  handleTopBarMobile?: (r: any) => void;
}

function TopbarMobile(props: TopbarMobileProps) {

  const navigate = useNavigate();
  const handleCloseTopBarMobile = () => props.handleTopBarMobile ? props.handleTopBarMobile(false) : null;

  return (
    <>
      <GlobalStyle />
      <TopContainerTopBarMobile>
        <FaReact
          style={{
            cursor: "pointer",
            width: "2.5rem",
            height: "2.5rem",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            marginRight: "65%"
          }}
          color={theme.colors.primary}
          onClick={() => navigate("/")}
        />
        <AiOutlineClose
          style={{
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
          }}
          color={theme.colors.grey}
          onClick={handleCloseTopBarMobile}
        />
        <Spacer horizontal="1.5rem" />
      </TopContainerTopBarMobile>
      <LineHorizontal />
      <Spacer vertical="12" />
      <ContentGeneralContainer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link path="/topbar/mobile">
          <Text variant="body1" hover>
            Mobile
          </Text>
        </Link>
        <Spacer vertical="8" />
        <Link path="/topbar/full">
          <Text variant="body1" hover>
            Full
          </Text>
        </Link>
        <Spacer vertical="8" />
        <Link path="/topbar/example">
          <Text variant="body1" hover>
            Example
          </Text>
        </Link>
        <Spacer vertical="12" />
        <Link path="/">
          <Text variant="h4" color="primaryBorder" bold>
            Cadastro
          </Text>
        </Link>
        <Spacer vertical="8" />
        <Button size="xs" color="primary" bordered hover>
          <Text variant="h4" bold>
            Login
          </Text>
        </Button>
      </ContentGeneralContainer>
    </>
  );
}

export default TopbarMobile;
