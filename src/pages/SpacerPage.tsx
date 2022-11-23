import React from "react";
import GlobalStyle from "../styles/GlobalStyle";

import styled from "styled-components";

import Spacer from "../Components/Spacer";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerVertical = styled.div`
  width: 50%;
  height: 400px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerHorizontal = styled.div`
  width: 50%;
  height: 400px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerSpacer = styled.div`
  width: 250px;
  height: 80px;
  background: blue;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

function SpacerPage() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Spacer vertical="18" />
      <ContainerVertical>
        <Spacer vertical="18" />
        <ContainerSpacer></ContainerSpacer>
        <Spacer vertical="18" />
        <ContainerSpacer></ContainerSpacer>
        <Spacer vertical="18" />
        <ContainerSpacer></ContainerSpacer>
        <Spacer vertical="18" />
      </ContainerVertical>
      <Spacer vertical="20" />
      <ContainerHorizontal>
        <Spacer horizontal="18" />
        <ContainerSpacer></ContainerSpacer>
        <Spacer horizontal="18" />
        <ContainerSpacer></ContainerSpacer>
        <Spacer horizontal="18" />
        <ContainerSpacer></ContainerSpacer>
        <Spacer horizontal="18" />
      </ContainerHorizontal>
    </MainContainer>
  );
}

export default SpacerPage;
