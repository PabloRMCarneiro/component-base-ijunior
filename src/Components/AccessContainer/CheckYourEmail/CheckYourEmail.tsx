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
  LineHorizontal,
  CenterContainer,
} from "../../../utils/Containers";

function CheckYourEmail() {
  const navigate = useNavigate();

  const codeTest: string = "12#21";

  const [code, setCode] = useState(" ");
  const HandleCode = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCode(e.target.value);
  const [modalCode, setModalCode] = useState(false);

  const validateCode = (code: string): boolean => {
    if (code === "" || code !== codeTest) {
      setModalCode(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = () => {
    if (validateCode(code)) navigate("/login");
  };

  return (
    <>
      {modalCode && (
        <ModalValidation
          showModal={modalCode}
          setShowModal={setModalCode}
          title="Código inválido !"
          description="O código informado é inválido, tente novamente."
        />
      )}
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
                <Text variant="h3">Verifique seu email</Text>
                <Spacer vertical="8" />
                <Text variant="legenda" center>
                  Para redefinir sua senha, informe o código que enviamos para o
                  seu email profissional. Lembre-se de verificar a caixa de spam
                  e o lixo eletrônico.
                </Text>
                <Spacer vertical="14" />
                <Input
                  size="2sm"
                  placeholder="Codigo"
                  type="text"
                  center
                  onChange={(e) => HandleCode(e)}
                />
                <Spacer vertical="12" />
                <Button
                  size="2xs"
                  color="primary"
                  hover
                  onClick={() => HandleSubmit()}
                >
                  <Text variant="body1" bold>
                    Confirmar
                  </Text>
                </Button>
                <Spacer vertical="11" />
                <LineHorizontal />
                <Spacer vertical="7" />
                <Link path="/esqueceu-sua-senha">
                  <Text variant="body2" color="primary" hover>
                    Não recebeu o código? Reenvie para o email
                  </Text>
                </Link>
                <Spacer vertical="4" />
              </CenterHorizontalContainer>
            </LeftAccessContainer>
          </MainAceessContainer>
        </Box>
      </MainContainer>
    </>
  );
}

export default CheckYourEmail;
