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

function ForgotYourPassword() {
  const navigate = useNavigate();
  const screen = useScreen();

  const emailTest: string = "teste@gmail.com";

  const [email, setEmail] = useState(" ");
  const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const [modalEmail, setModalEmail] = useState(false);

  const validateEmail = (email: string): boolean => {
    if (email === "" || email !== emailTest) {
      setModalEmail(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = () => {
    if (validateEmail(email)) navigate("/");
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
      {modalEmail && (
        <ModalValidation
          showModal={modalEmail}
          setShowModal={setModalEmail}
          title="Email inválido !"
          description="O email informado é inválido, tente novamente."
        />
      )}
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
              <Text variant="h4">Esqueceu sua senha?</Text>
              <Spacer vertical="8" />
              <Text variant="legenda" center>
                Basta inserir seu endereço de e-mail profissional abaixo e
                enviaremos um código para redefinir sua senha!
              </Text>
              <Spacer vertical="12" />
              <Input
                size="2sm"
                placeholder="Email profissional"
                type="email"
                center
                onChange={(e) => HandleEmail(e)}
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
                  Redefnir senha
                </Text>
              </Button>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="8" />
              ) : (
                <Spacer vertical="6" />
              )}
              <Link path="/login">
                <Text variant="body2" color="primary" hover>
                  Já tem uma conta? Faça login
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
                  onClick={() => navigate("/login")}
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
                  <Text variant="h3">Esqueceu sua senha?</Text>
                  <Spacer vertical="8" />
                  <Text variant="legenda" center>
                    Basta inserir seu endereço de e-mail profissional abaixo e
                    enviaremos um código para redefinir sua senha!
                  </Text>
                  <Spacer vertical="14" />
                  <Input
                    size="2sm"
                    placeholder="Email profissional"
                    type="email"
                    center
                    onChange={(e) => HandleEmail(e)}
                  />
                  <Spacer vertical="12" />
                  <Button
                    size="2xs"
                    color="primary"
                    hover
                    onClick={() => HandleSubmit()}
                  >
                    <Text variant="body1" bold>
                      Redenifir senha
                    </Text>
                  </Button>
                  <Spacer vertical="11" />
                  <LineHorizontal />
                  <Spacer vertical="7" />
                  <Link path="/login">
                    <Text variant="body2" color="primary" hover>
                      Já tem uma conta? Faça login
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

export default ForgotYourPassword;
