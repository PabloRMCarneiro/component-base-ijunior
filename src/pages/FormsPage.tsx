import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

import Box from "../Components/Box";
import Text from "../Components/Text";
import Spacer from "../Components/Spacer";
import Button from "../Components/Button";
import Input from "../Components/Input";

import Row from "../Components/Grid/Row";
import Column from "../Components/Grid/Column";

import { BiArrowBack } from "react-icons/bi";

import {
  MainContainer,
  TitleGeneralContainer,
  ContentGeneralContainer,
  CenterContainer,
} from "../utils/Containers";

function FormsPage() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, getScreenWidth] = useState(window.innerWidth);
  const setScreenWidth = () => getScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    return () => window.removeEventListener("resize", setScreenWidth);
  }, []);

  useEffect(
    () =>
      screenWidth <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
        ? setIsMobile(true)
        : setIsMobile(false),
    [screenWidth]
  );

  return (
    <>
      <GlobalStyle />
      <MainContainer
        style={{
          backgroundColor: `${theme.colors.offWhite}`,
        }}
      >
        {isMobile ? <Spacer vertical="12" /> : null}
        <TitleGeneralContainer style={{ width: "90%" }}>
          <Text variant="h3" bold>
            Forms
          </Text>
        </TitleGeneralContainer>
        <Spacer vertical="4" />
        <Box
          size="forms"
          backgroundColor="bgLogin"
          rounded
          shadow="accessContainer"
        >
          <ContentGeneralContainer>
            <BiArrowBack
              style={{
                width: `${isMobile ? "1.5rem" : "2rem"}`,
                height: `${isMobile ? "1.5rem" : "2rem"}`,
                cursor: "pointer",
              }}
              color={theme.colors.grey}
              onClick={() => navigate("/")}
            />
            <div
              style={{
                width: "calc(100% - 2rem)",
                height: "calc(100% - 3rem)",
                display: "flex",
                flexDirection: "column",
                marginLeft: `${isMobile ? "1rem" : "2rem"}`,
                alignItems: "center",
              }}
            >
              <Spacer vertical="8" />
              <Row>
                <Column grid={12}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text variant="body2">Nome Completo</Text>
                    <Spacer vertical="4" />
                    <Input
                      size="forms"
                      placeholder="Nome Completo"
                      type="text"
                      center
                    />
                  </div>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={6}>
                  <CenterContainer>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">CPF</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite seu CPF"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
                <Column grid={6}>
                  <CenterContainer>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">RG</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite seu RG"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={4}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">País</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"                       
                        placeholder="Selecione seu Pais"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
                <Column grid={4}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Estado</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"                       
                        placeholder="Selecione seu Estado"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
                <Column grid={4}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">CEP</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"                       
                        placeholder="Digite seu CEP"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={3}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Rua</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"                        
                        placeholder="Digite sua Rua"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Bairro</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"                        
                        placeholder="Digite seu Bairro"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Número</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"                        
                        placeholder="Numero da sua casa ou apto"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Complemento</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"                        
                        placeholder="Ex: casa ou prédio"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={6}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Senha</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite sua senha"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
                <Column grid={6}>
                  <CenterContainer>
                  <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Confirmar senha</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite novamente sua senha"
                        type="text"
                        center
                      />
                    </div>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="14" />
              <Button size={ screenWidth < 1138 && !isMobile ? "md" : (isMobile ? "2xs" : "xlg")}color="primary" hover>
                <Text variant="body2" bold>
                  Cadastrar
                </Text>
              </Button>
              <Spacer vertical="14" />
            </div>
          </ContentGeneralContainer>
        </Box>
        <Spacer vertical="12" />
      </MainContainer>
    </>
  );
}

export default FormsPage;
