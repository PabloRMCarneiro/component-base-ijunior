import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { MainContainer } from "../utils/Containers"

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
          size="sm"
          radius="md"
          color="primarySolidContrast"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          onClick={() => console.log("Hello World")}
          bordered
        >
          <Text variant="h4">Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xs"
          radius="lg"
          color="primarySolidContrast"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
        >
          <Text variant="h4">Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          radius="2xl"
          color="primaryLightActive"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          shadow="xl"
        >
          <Text variant="body1">Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          radius="xs"
          color="primaryLightActive"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          bordered
        >
          <Text variant="body2">Hello World</Text>
        </Button>

        <Spacer vertical="18" />
      </Container>
    </MainContainer>
  );
}

export default ButtonPage;
