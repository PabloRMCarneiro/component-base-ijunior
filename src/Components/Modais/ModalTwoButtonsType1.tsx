import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";

interface ModalTwoButtonsType1Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Button from "../Button";
import Box from "../Box";
import Text from "../Text";
import Spacer from "../Spacer";
import ClosedIcon from "../../img/ClosedIcon.png";
import {
  MainContainerModal,
  TopContainerInModal,
  LineHorizontal,
  CenterHorizontalContainer,
  MainContainerInModal,
  BottomContainerInModal,
} from "../../utils/Containers";

function ModalTwoButtonsType1({
  showModal,
  setShowModal,
}: ModalTwoButtonsType1Props) {
  
  return (
    <>
      {showModal ? (
        <MainContainerModal>
          <GlobalStyle />
          <Box size="modalSizeType1" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="h4" bold color="red">
                  {" "}
                  Item não salvo !{" "}
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
                <Text variant="h4" textAlign>
                  O item modificado não foi salvo, o que deseja fazer?
                </Text>
              </MainContainerInModal>
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="sm"
                  color="red"
                  bordered
                  hover={{ color: "red", fontColor: "white" }}
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="h4"> Sair </Text>
                </Button>
                <Spacer horizontal="6" />
                <Button
                  size="sm"
                  color="red"
                  hover={{ color: "red", fontColor: "white" }}
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="h4"> Continuar </Text>
                </Button>
              </BottomContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalTwoButtonsType1;
