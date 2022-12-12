import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { MainContainer } from "../utils/Containers"

const Container = styled.div`
  width: 100rem;
  height: 40rem;
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
        <GlobalStyle />
        <Spacer vertical="18" />
        <Button
          size="sm"
          color="primary"
          onClick={() => console.log("Hello World")}
          bordered
          hover
        >
          <Text variant="body2" bold >Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xs"
          color="primary"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="primary"
          hover
          bordered
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="md"
          color="primary"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="lg"
          color="primary"
          bordered
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xlg"
          color="primary"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="sm"
          color="sucess"
          onClick={() => console.log("Hello World")}
          bordered
          hover
        >
          <Text variant="body2" bold >Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xs"
          color="sucess"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="sucess"
          hover
          bordered
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="md"
          color="sucess"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="lg"
          color="sucess"
          bordered
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xlg"
          color="sucess"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="sm"
          color="warning"
          onClick={() => console.log("Hello World")}
          bordered
          hover
        >
          <Text variant="body2" bold >Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xs"
          color="warning"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="warning"
          hover
          bordered
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="md"
          color="warning"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="lg"
          color="warning"
          bordered
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xlg"
          color="warning"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="sm"
          color="danger"
          onClick={() => console.log("Hello World")}
          bordered
          hover
        >
          <Text variant="body2" bold >Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xs"
          color="danger"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="danger"
          hover
          bordered
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="md"
          color="danger"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="lg"
          color="danger"
          bordered
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
        <Button
          size="xlg"
          color="danger"
          hover
        >
          <Text variant="body2" bold>Hello World</Text>
        </Button>

        <Spacer vertical="18" />
    </MainContainer>
  );
}

export default ButtonPage;
