import React from "react";
import GlobalStyle from "../styles/GlobalStyle";

interface ModalType5Props {
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

function ModalType5({
  showModal,
  setShowModal,
}: ModalType5Props) {
  
  return (
    <>
      {showModal ? (
        <MainContainerModal>
          <GlobalStyle />
          <Box size="modalSizeType5" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="h4" bold color="red">
                  {" "}
                  Modal Informativo 2!{" "}
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae ipsam non fuga similique. Recusandae optio maxime delectus minus repudiandae, exercitationem, non ipsa sapiente provident, unde tempore voluptatem ipsam tenetur?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cupiditate nam quas libero, voluptatem natus ullam, laborum numquam sint quisquam alias reiciendis maxime asperiores! Voluptates ipsum exercitationem dolor et nostrum.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione sequi ipsa recusandae culpa id! Laborum illum veritatis, esse commodi cum omnis eos exercitationem odit velit deleniti necessitatibus inventore possimus?
                </Text>
              </MainContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalType5;
