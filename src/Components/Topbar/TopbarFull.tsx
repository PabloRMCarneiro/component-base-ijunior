import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate, useLocation } from "react-router-dom";

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

} from "../../utils/Containers";

function TopbarFull() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Box size="topbarFull" backgroundColor="greyLight">
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
            {
              location.pathname.indexOf("short") !== -1 ? 
              ( 
                <LinkCotainerTopbar>
                <Text variant="body2" hover bold>Short</Text> 
                <BottomBarTopbar color="primary" />
                </LinkCotainerTopbar>
              ) :
              ( <Text variant="body2" hover>Short</Text> )
            }
            <Spacer horizontal="9" />
            {
              location.pathname.indexOf("full") !== -1 ? 
              ( 
                <LinkCotainerTopbar>
                <Text variant="body2" hover bold>Full</Text> 
                <BottomBarTopbar color="primary" />
                </LinkCotainerTopbar>
              ) :
              ( <Text variant="body2" hover>Full</Text> )
            }
            <Spacer horizontal="9" />
            {
              location.pathname.indexOf("example") !== -1 ? 
              ( 
                <LinkCotainerTopbar>
                <Text variant="body2" hover bold>Exemplo</Text> 
                <BottomBarTopbar color="primary" />
                </LinkCotainerTopbar>
              ) :
              ( <Text variant="body2" hover>Exemplo</Text> )
            }
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
    </>
  );
}

export default TopbarFull;
