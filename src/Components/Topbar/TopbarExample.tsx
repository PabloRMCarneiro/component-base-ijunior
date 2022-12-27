import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Login from "../AccessContainer/Login/Login";
import TopbarFull from "./TopbarFull";
import TopbarMobile from "./TopbarMobile";

import { CenterContainer } from "../../utils/Containers";

import { topBarMobileExport } from "./TopbarFull";

function TopbarExample() {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    topBarMobileExport ? setMobile(true) : setMobile(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      {mobile ? (
        <TopbarMobile />
      ) : (
        <>
          <TopbarFull />
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
