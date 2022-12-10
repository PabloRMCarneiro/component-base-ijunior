import React, { useState } from "react";
import GlobalStyle from "../../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

import Button from "../../Button";
import Box from "../../Box";
import Spacer from "../../Spacer";
import Text from "../../Text";
import Input from "../../Input";
import Link from "../../Link";

import ModalValidation from "./ModalValidation";

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

function Login() {
  const navigate = useNavigate();


  const emailTest: string = "teste@gmail.com";
  const passwordTest: string = "123456";

  const [email, setEmail] = useState(" ");
  const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const [modalEmailVoid, setModalEmailVoid] = useState(false);
  const [modalEmailInvalid, setModalEmailInvalid] = useState(false);

  const [password, setPassword] = useState(" ");
  const HandlePassowrd = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const [modalPasswordVoid, setModalPasswordVoid] = useState(false);
  const [modalPasswordInvalid, setModalPasswordInvalid] = useState(false);

  const validateEmail = (email: string): boolean => {
    if (email === " ") {
      setModalEmailVoid(true);
      return false;
    }
    if (email !== emailTest) {
      setModalEmailInvalid(true);
      return false;
    }
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (password === " ") {
      setModalPasswordVoid(true);
      return false;
    }
    if (password !== passwordTest) {
      setModalPasswordInvalid(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) navigate("/");
  };

  return (
    <>
      {modalEmailVoid && (
        <ModalValidation
          showModal={modalEmailVoid}
          setShowModal={setModalEmailVoid}
          title="Email inválido !"
          description="O email informado é inválido, tente novamente."
        />
      )}
      {modalEmailInvalid && (
        <ModalValidation
          showModal={modalEmailInvalid}
          setShowModal={setModalEmailInvalid}
          title="Email inválido !"
          description="O email informado não é cadastrado, tente novamente."
        />
      )}
      {modalPasswordVoid && (
        <ModalValidation
          showModal={modalPasswordInvalid}
          setShowModal={setModalPasswordInvalid}
          title="Senha inválida !"
          description="A senha informada é inválida, tente novamente."
        />
      )}
      {modalPasswordInvalid && (
        <ModalValidation
          showModal={modalPasswordInvalid}
          setShowModal={setModalPasswordInvalid}
          title="Senha inválida !"
          description="A senha informada não confere com o email, tente novamente."
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
                <Spacer vertical="15" />
                <Text variant="h3">Login</Text>
                <Spacer vertical="14" />
                <Input
                  size="2sm"
                  placeholder="Email profissional"
                  type="email"
                  center
                  onChange={(e) => HandleEmail(e)}
                />
                <Spacer vertical="9" />
                <Input
                  size="2sm"
                  placeholder="Senha"
                  type="password"
                  center
                  onChange={(e) => HandlePassowrd(e)}
                />
                <Spacer vertical="12" />
                <Button
                  size="2xs"
                  color="primary"
                  hover
                  onClick={() => HandleSubmit()}
                >
                  <Text variant="body1" bold>
                    Entrar
                  </Text>
                </Button>
                <Spacer vertical="11" />
                <LineHorizontal />
                <Spacer vertical="7" />
                <Link path="/">
                  <Text variant="body2" color="primary" hover>
                    Esqueceu a senha?
                  </Text>
                </Link>
                <Spacer vertical="4" />
                <Link path="/">
                  <Text variant="body2" color="primary" hover>
                    Ainda não tem uma? Cadastre aqui
                  </Text>
                </Link>
              </CenterHorizontalContainer>
            </LeftAccessContainer>
          </MainAceessContainer>
        </Box>
      </MainContainer>
    </>
  );
}

export default Login;
