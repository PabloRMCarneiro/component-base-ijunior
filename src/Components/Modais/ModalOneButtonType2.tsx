import React, { useState, useRef } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { AiOutlineClose } from "react-icons/ai";
import { theme } from "../../styles/theme";
interface ModalOneButtonType2Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Button from "../Button";
import Box from "../Box";
import Text from "../Text";
import Input from "../Input";

import {
  MainContainerModal,
  TopContainerInModal,
  LineHorizontal,
  CenterHorizontalContainer,
  MainContainerInModal,
  BottomContainerInModal,
} from "../../utils/Containers";

export var ModalOneButtonType2InputValue: string = "";

function ModalOneButtonType2({
  showModal,
  setShowModal,
}: ModalOneButtonType2Props) {
  const [inputValue, setInputValue] = useState("");
  const HandleInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const ModalRef = useRef<HTMLHeadingElement>(null);

  const CloseModalOnOutsideClick = (e: any) =>
    ModalRef.current === e.target ? setShowModal(false) : null;

  return (
    <>
      {showModal ? (
        <MainContainerModal
          ref={ModalRef}
          onClick={(e) => CloseModalOnOutsideClick(e)}
        >
          <GlobalStyle />
          <Box size="modalSizeType2" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold color="primary">
                  Adicionar Resposta
                </Text>
                <AiOutlineClose
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                  color={theme.colors.grey}
                  onClick={() => setShowModal(false)}
                />
              </TopContainerInModal>
              <LineHorizontal />
              <MainContainerInModal>
                <Input
                  size="sm"
                  type="text"
                  placeholder="Insira a para adicionar uma resposta à pergunta referente ao item do checkbox."
                  onChange={(e) => HandleInputValue(e)}
                  mask="000.000.000-00"
                />
              </MainContainerInModal>
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="2xs"
                  color="primary"
                  bordered
                  hover
                  onClick={() => {
                    setShowModal(false);
                    ModalOneButtonType2InputValue = inputValue;
                  }}
                >
                  <Text variant="body2" bold>
                    Confirmar
                  </Text>
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
