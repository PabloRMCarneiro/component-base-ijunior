import React, { useRef } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { AiOutlineClose } from "react-icons/ai";
import { theme } from "../../styles/theme";
interface ModalTwoButtonsType1Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Button from "../Button";
import Box from "../Box";
import Text from "../Text";
import Spacer from "../Spacer";

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
          <Box size="modalSizeType1" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold color="primary">
                  Item não salvo !
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
                <Text variant="body2" color="greySolid">
                  O item modificado não foi salvo, o que deseja fazer?
                </Text>
              </MainContainerInModal>
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="xs"
                  color="primary"
                  bordered
                  hover
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="body2" bold>
                    Sair
                  </Text>
                </Button>
                <Spacer horizontal="12" />
                <Button
                  size="xs"
                  color="primary"
                  hover
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="body2" bold>
                    Continuar
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

export default ModalTwoButtonsType1;
