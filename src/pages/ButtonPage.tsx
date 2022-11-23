import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
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

function ButtonPage() {
  return (
    <MainContainer>
      <Container>
        <GlobalStyle />
        <Spacer vertical="18" />
        <Button
          message="Hello World"
          size={{ width: "4xl", height: "xl" }}
          font={{ size: "sm", color: "primaryLightContrast", fontWeight: 500 }}
          radius="md"
          color="primarySolidContrast"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          onClick={() => console.log("Hello World")}
          bordered
        />
        <Spacer vertical="18" />
        <Button
          message="Hello World"
          size={{ width: "6xl", height: "2xl" }}
          font={{ size: "sm", color: "primaryLightContrast", fontWeight: 500 }}
          radius="lg"
          color="primarySolidContrast"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
        />
        <Spacer vertical="18" />
        <Button
          message="World"
          size={{ width: "3xl", height: "2xl" }}
          font={{ size: "md", color: "primaryBorderHover", fontWeight: 900 }}
          radius="2xl"
          color="primaryLightActive"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          shadow="xl"
        />
        <Spacer vertical="18" />
        <Button
          message="World"
          size={{ width: "5xl", height: "lg" }}
          font={{ size: "sm", color: "primaryBorderHover", fontWeight: 400 }}
          radius="xs"
          color="primaryLightActive"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          bordered
        />
        <Spacer vertical="18" />
      </Container>
    </MainContainer>
  );
}

export default ButtonPage;
