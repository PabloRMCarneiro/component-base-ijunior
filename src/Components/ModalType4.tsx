import React from "react";
import GlobalStyle from "../styles/GlobalStyle";

interface ModalType4Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Button from "./Button";
import Box from "./Box";
import Text from "./Text";
import Spacer from "./Spacer";
import ClosedIcon from "../img/ClosedIcon.png";
import {
  MainContainerModal,
  TopContainerInModal,
  LineHorizontal,
  CenterHorizontalContainer,
  MainContainerInModal,
  BottomContainerInModal,
} from "../utils/Containers";

function ModalType4({
  showModal,
  setShowModal,
}: ModalType4Props) {
  
  return (
    <>
      {showModal ? (
        <MainContainerModal>
          <GlobalStyle />
          <Box size="modalSizeType4" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="h4" bold color="red">
                  {" "}
                  Modal Informativo 1!{" "}
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita excepturi sint praesentium, sit optio ullam sed iusto voluptate possimus, quasi nulla modi qui culpa nobis consectetur voluptatum minima facere magnam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis atque vero porro aperiam aliquid quisquam quas neque, quis perferendis ea velit nulla.
                </Text>
              </MainContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalType4;
