import React, { useState } from "react";
import GlobalStyle from "../../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

import Button from "../../Button";
import Box from "../../Box";
import Spacer from "../../Spacer";
import Text from "../../Text";
import Input from "../../Input";
import Link from "../../Link";

import ModalValidation from "../ModalValidation";

import Logo from "../../../img/logoAccessContainer.png";

import {
  MainContainer,
  RightAccessContainer,
  LineVertical,
  MainAceessContainer,
  LeftAccessContainer,
  CenterHorizontalContainer,
  CenterContainer,
} from "../../../utils/Containers";

function NewPassword() {
  const navigate = useNavigate();


  const [newPassword, setNewPassword] = useState("");
  const HandleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);

  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const HandleConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmNewPassword(e.target.value);
  
  const [modalConferencePassword, setModalConferencePassword] = useState(false);
  const [modalNewPasswordVoid, setModalNewPasswordVoid] = useState(false);

  const validateNewPassword = (): boolean => {
    if(newPassword !== confirmNewPassword) {
      setModalConferencePassword(true);
      return false;
    }
    if(newPassword === ""){
      setModalNewPasswordVoid(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = () => {
    if (validateNewPassword()) navigate("/login");
  };

  return (
    <>
      {(modalConferencePassword && (
        <ModalValidation
          showModal={modalConferencePassword}
          setShowModal={setModalConferencePassword}
          title="Senhas não conferem!"
          description="As senhas não são iguais, tente novamente."
        />
      )) ||
        (modalNewPasswordVoid && (
          <ModalValidation
            showModal={modalNewPasswordVoid}
            setShowModal={setModalNewPasswordVoid}
            title="Nova senha inválida!"
            description="A nova senha não pode ser vazia, tente novamente."
          />
        ))
      }
      <MainContainer style={{ flexDirection: "row" }}>
        <GlobalStyle />
        <Box
          size="accessContainer"
          rounded
          backgroundColor="bgLogin"
          shadow="accessContainer"
        >
          <MainAceessContainer>
            <RightAccessContainer>
              <CenterContainer>
                <img src={Logo} alt="" />
              </CenterContainer>
            </RightAccessContainer>
            <LineVertical />
            <LeftAccessContainer>
              <CenterHorizontalContainer>
                <Spacer vertical="20" />
                <Text variant="h3">Nova Senha</Text>
                <Spacer vertical="8" />
                <Text variant="legenda" center>
                  Escolha sua nova senha de acesso. Lembre-se de escolher uma senha segura, mas que você não vá esquecer de novo!
                </Text>
                <Spacer vertical="14" />
                <Input
                  size="2sm"
                  placeholder="Nova senha"
                  type="password"
                  center
                  onChange={(e) => HandleNewPassword(e)}
                />
                <Spacer vertical="9" />
                <Input
                  size="2sm"
                  placeholder="Repita a nova senha"
                  type="password"
                  center
                  onChange={(e) => HandleConfirmNewPassword(e)}
                />
                <Spacer vertical="12" />
                <Button
                  size="2xs"
                  color="primary"
                  hover
                  onClick={() => HandleSubmit()}
                >
                  <Text variant="body1" bold>
                    Redefinir Senha
                  </Text>
                </Button>
              </CenterHorizontalContainer>
            </LeftAccessContainer>
          </MainAceessContainer>
        </Box>
      </MainContainer>
    </>
  );
}

export default NewPassword;
