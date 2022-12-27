import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Login from "../AccessContainer/Login/Login";
import TopbarFull from "./TopbarFull";
import TopbarMobile from "./TopbarMobile";

import { CenterContainer } from "../../utils/Containers";

function TopbarExample() {

  const [componentTopBarMobile, setComponentTopBarMobile] = useState(false);

  const updateTopBarMobile = (r: any) => setComponentTopBarMobile(r);

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
    <>
      <GlobalStyle />
      {componentTopBarMobile && isMobile ? (
        <TopbarMobile handleTopBarMobile={updateTopBarMobile}/>
      ) : (
        <>
          <TopbarFull handleTopBarMobile = {updateTopBarMobile}/>
          <CenterContainer
            style={{ backgroundColor: `${theme.colors.offWhite}` }}
          >
            <Login />
          </CenterContainer>
        </>
      )}
    </>
  );
}

export default TopbarExample;
