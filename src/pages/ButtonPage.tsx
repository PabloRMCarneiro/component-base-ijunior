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
          color="primary"
          onClick={() => console.log("Hello World")}
          bordered
          hover
        >
          <Text variant="body1" >Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xs"
          color="primary"
          hover
        >
          <Text variant="body1">Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="primary"
          shadow="xl"
          hover
        >
          <Text variant="body1">Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="primary"
          bordered
          hover
        >
          <Text variant="body2">Hello World</Text>
        </Button>

        <Spacer vertical="18" />
      </Container>
    </MainContainer>
  );
}

export default ButtonPage;
