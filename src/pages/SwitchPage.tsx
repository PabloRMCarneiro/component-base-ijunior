import React, { useState, useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";

import Switch from "../Components/Switch";
import Spacer from "../Components/Spacer";

import { MainContainer } from "../utils/Containers";


function SwitchPage() {

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Spacer vertical="15"/>
        <Switch size="lg" color="secondary" />
        <Switch size="md" color="secondary" />
        <Switch size="md" color="secondary" />
      </MainContainer>
    </>
  );
}

export default SwitchPage;
