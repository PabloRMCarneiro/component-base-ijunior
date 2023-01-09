import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

import Box from "../Box";
import Spacer from "../Spacer";


import { FaReact } from "react-icons/fa"
import { MdLogout } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { ImDatabase, ImCalendar } from "react-icons/im";

import {
  InternalContainerNavbar,
  CenterContainer,
  LineHorizontal,
  LinkContainerNavbar,
} from "../../utils/Containers";

import { theme } from "../../styles/theme";

function NavbarShort() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Box size="navbarShort" backgroundColor="white">
        <CenterContainer>
          <InternalContainerNavbar>
              <FaReact
                style={{
                  cursor: "pointer",
                  width: "3.5rem",
                  height: "3.5rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/")}
              />
            <Spacer vertical="8" />
            <LineHorizontal />
            <Spacer vertical="10" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <BsHouse
                style={{
                  cursor: "pointer",
                  width: "1.875rem",
                  height: "1.875rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/general-container")}
              />
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <ImDatabase
                style={{ cursor: "pointer", width: "1.6rem", height: "1.6rem" }}
                color={theme.colors.primary}
                onClick={() =>
                  navigate("/general-filter-container/dados-gerais")
                }
              />
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <ImCalendar
                style={{ cursor: "pointer", width: "1.6rem", height: "1.6rem" }}
                color={theme.colors.primary}
                onClick={() =>
                  navigate("/buttons")
                }
              />
            </LinkContainerNavbar>
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <MdLogout
              size="1.5rem"
              color={theme.colors.greyDark}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </InternalContainerNavbar>
        </CenterContainer>
      </Box>
    </>
  );
}

export default NavbarShort;
