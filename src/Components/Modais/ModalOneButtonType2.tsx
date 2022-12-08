import React, { useState } from "react";
import GlobalStyle from "../../styles/GlobalStyle";

interface ModalOneButtonType2Props {
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

function ModalOneButtonType2({
  showModal,
  setShowModal,
}: ModalOneButtonType2Props) {
  
  const [inputValue, setInputValue] = useState("");
  const HandleInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <>
      {showModal ? (
        <MainContainerModal>
          <GlobalStyle />
          <Box size="modalSizeType2" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold color="primary">
                  {" "}
                  Adicionar Resposta{" "}
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
                  placeholder="Insira a para adicionar uma resposta à pergunta referente ao item do checkbox."
                  onChange={(e) => HandleInputValue(e)}
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
                    console.log(inputValue);
                  }}
                >
                  <Text variant="h4"> Confirmar </Text>
                </Button>
              </BottomContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalOneButtonType2;
