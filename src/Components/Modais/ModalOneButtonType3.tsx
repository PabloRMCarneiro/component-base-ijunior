import React, { useState } from "react";
import GlobalStyle from "../../styles/GlobalStyle";

interface ModalOneButtonType3Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Button from "../Button";
import Box from "../Box";
import Text from "../Text";
import Spacer from "../Spacer";
import Input from "../Input";
import ClosedIcon from "../../img/ClosedIcon.png";
import {
  MainContainerModal,
  TopContainerInModal,
  LineHorizontal,
  CenterHorizontalContainer,
  MainContainerInModal,
  BottomContainerInModal,
} from "../../utils/Containers";

function ModalOneButtonType3({
  showModal,
  setShowModal,
}: ModalOneButtonType3Props) {
  
  const [input1Value, setInput1Value] = useState(""); // First input
  const [input2Value, setInput2Value] = useState(""); // Second input

  const HandleInput1Value = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput1Value(e.target.value); // First input
  const HandleInput2Value = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput2Value(e.target.value); // Second input

  return (
    <>
      {showModal ? (
        <MainContainerModal>
          <GlobalStyle />
          <Box size="modalSizeType3" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold color="primary">
                  {" "}
                  Adicionar coluna{" "}
                </Text>
                <img
                  src={ClosedIcon}
                  alt="ClosedIcon"
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowModal(false)}
                />
              </TopContainerInModal>
              <Spacer vertical="6" />
              <LineHorizontal />
              <MainContainerInModal>
                <Input
                  size="2xs"
                  type="text"
                  placeholder="Insira o nome da coluna a ser adicionada."
                  onChange={(e) => HandleInput1Value(e)}
                />
                <Spacer vertical="10" />
                <Input
                  size="xs"
                  type="text"
                  placeholder="Insira o valor da coluna."
                  onChange={(e) => HandleInput2Value(e)}
                />
              </MainContainerInModal>
              <Spacer vertical="6" />
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="2xs"
                  color="primary"
                  bordered
                  hover
                  onClick={() => {
                    setShowModal(false);
                    console.log(input1Value, input2Value);
                  }}
                >
                  <Text variant="body1"> Confirmar </Text>
                </Button>
              </BottomContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalOneButtonType3;
