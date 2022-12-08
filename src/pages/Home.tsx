import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { MainContainer } from "../utils/Containers";

function Home() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <GlobalStyle />
      <Button
        size="md"
        color="primary"
        hover
        onClick={() => navigate("/buttons")}
      >
        <Text variant="h3" color="white">
          Button
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="md"
        color="primary"
        hover
        onClick={() => navigate("/spacer")}
      >
        <Text variant="h3" color="white">
          Spacer
        </Text>
      </Button>

      <Spacer vertical="18" />
      <Button
        size="md"
        color="primary"
        hover
        onClick={() => navigate("/box")}
      >
        <Text variant="h3" color="white">
          Box
        </Text>
      </Button>

      <Spacer vertical="18" />
      <Button
        size="md"
        color="primary"
        hover
        onClick={() => navigate("/modal")}
      >
        <Text variant="h3" color="white">
          Modal
        </Text>
      </Button>
    </MainContainer>
  );
}

export default Home;
