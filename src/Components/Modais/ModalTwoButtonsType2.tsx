import React, { useState } from "react";
import GlobalStyle from "../../styles/GlobalStyle";

interface ModalTwoButtonsType2Props {
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

function ModalTwoButtonsType2({
  showModal,
  setShowModal,
}: ModalTwoButtonsType2Props) {
  
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
                <Text variant="h4" bold color="red">
                  {" "}
                  Adicionar fonte{" "}
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
                  placeholder="Insira a para adicionar uma fonte à resposta da pergunta referente ao item do checkbox."
                  onChange={(e:any) => HandleInputValue(e)}
                />
              </MainContainerInModal>
              <Spacer vertical="6" />
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="sm"
                  color="red"
                  bordered
                  hover={{ color: "red", fontColor: "white" }}
                  onClick={() => {
                    setShowModal(false);
                    console.log(inputValue);
                  }}
                >
                  <Text variant="h4"> Sair </Text>
                </Button>
                <Spacer horizontal="6" />
                <Button
                  size="sm"
                  color="red"
                  hover={{ color: "red", fontColor: "white" }}
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

export default ModalTwoButtonsType2;
