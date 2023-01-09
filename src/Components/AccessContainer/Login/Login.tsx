import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../../../hooks/useScreen";

import GlobalStyle from "../../../styles/GlobalStyle";
import { theme } from "../../../styles/theme";

import Button from "../../Button";
import Box from "../../Box";
import Spacer from "../../Spacer";
import Text from "../../Text";
import Input from "../../Input";
import Link from "../../Link";

import ModalValidation from "../ModalValidation";

import { BiArrowBack } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

import {
  MainContainer,
  RightAccessContainer,
  LineVertical,
  MainAceessContainer,
  LeftAccessContainer,
  CenterHorizontalContainer,
  LineHorizontal,
} from "../../../utils/Containers";

function Login() {
  const navigate = useNavigate();
  const screen = useScreen();

  const emailTest: string = "teste@gmail.com";
  const passwordTest: string = "123456";

  const [email, setEmail] = useState(" ");
  const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const [modalEmail, setModalEmail] = useState(false);

  const [password, setPassword] = useState(" ");
  const HandlePassowrd = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const [modalPassword, setModalPassword] = useState(false);

  const validateEmail = (email: string): boolean => {
    if (email === "" || email !== emailTest) {
      setModalEmail(true);
      return false;
    }
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (password === "" || password !== passwordTest) {
      setModalPassword(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) navigate("/");
  };

  const logoSizeOptions = ["7.1875rem", "5rem", "4rem"];
  const [logoSize, setLogoSize] = useState(logoSizeOptions[0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (
      screen >
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
    )
      setLogoSize(logoSizeOptions[0]);

    if (
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
    )
      setLogoSize(logoSizeOptions[1]);

    if (
      screen <
      Number(
        theme.breakpoints.ml.slice(0, theme.breakpoints.ml.indexOf("rem"))
      ) *
        16
    )
      setLogoSize(logoSizeOptions[2]);
  }, [screen]);

  return (
    <>
      {(modalEmail && (
        <ModalValidation
          showModal={modalEmail}
          setShowModal={setModalEmail}
          title="Email inválido !"
          description="O email informado é inválido, tente novamente."
        />
      )) ||
        (modalPassword && (
          <ModalValidation
            showModal={modalPassword}
            setShowModal={setModalPassword}
            title="Senha inválida !"
            description="A senha informada é inválida, tente novamente."
          />
        ))}
      {isMobile ? (
        <MainContainer>
          <GlobalStyle />
          <Box
            size="accessContainerMobile"
            rounded
            backgroundColor="backgroundBox"
            shadow="accessContainer"
          >
            <CenterHorizontalContainer style={{ padding: "0 3rem 0 3rem" }}>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="16" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="14" />
              ) : (
                <Spacer vertical="12" />
              )}
              <FaReact
                style={{ width: `${logoSize}`, height: `${logoSize}` }}
                color={theme.colors.primary}
              />
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="8" />
              ) : (
                <Spacer vertical="4" />
              )}
              <Text variant="h4">Login</Text>
              <Spacer vertical="8" />
              <Input
                size="2sm"
                placeholder="Email profissional"
                type="email"
                center
                onChange={(e) => HandleEmail(e)}
              />
              <Spacer vertical="8" />
              <Input
                size="2sm"
                placeholder="Senha"
                type="password"
                center
                onChange={(e) => HandlePassowrd(e)}
              />
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : (
                <Spacer vertical="8" />
              )}
              <Button
                size="2xs"
                color="primary"
                hover
                onClick={() => HandleSubmit()}
              >
                <Text variant="body2" bold>
                  Entrar
                </Text>
              </Button>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="8" />
              ) : (
                <Spacer vertical="6" />
              )}
              <Link path="/esqueceu-sua-senha">
                <Text variant="body2" color="primary" hover>
                  Esqueceu a senha?
                </Text>
              </Link>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="4" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="2" />
              ) : (
                <Spacer vertical="1" />
              )}
              <Link path="/">
                <Text variant="body2" color="primary" hover>
                  Ainda não tem uma? Cadastre aqui
                </Text>
              </Link>
            </CenterHorizontalContainer>
          </Box>
        </MainContainer>
      ) : (
        <MainContainer style={{ flexDirection: "row" }}>
          <GlobalStyle />
          <Box
            size="accessContainer"
            rounded
            backgroundColor="backgroundBox"
            shadow="accessContainer"
          >
            <MainAceessContainer>
              <RightAccessContainer style={{ flexDirection: "column" }}>
                <Spacer vertical="12" />
                <BiArrowBack
                  style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
                  color={theme.colors.grey}
                  onClick={() => navigate("/")}
                />
                <CenterHorizontalContainer>
                  <Spacer vertical="16" />
                  <FaReact
                    style={{ width: "13.875rem", height: "13.875rem" }}
                    color={theme.colors.primary}
                  />
                </CenterHorizontalContainer>
              </RightAccessContainer>
              <LineVertical />
              <LeftAccessContainer>
                <CenterHorizontalContainer style={{ justifyContent: "center" }}>
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
                    <Text variant="body2" bold>
                      Entrar
                    </Text>
                  </Button>
                  <Spacer vertical="11" />
                  <LineHorizontal />
                  <Spacer vertical="7" />
                  <Link path="/esqueceu-sua-senha">
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
      )}
    </>
  );
}

export default Login;
