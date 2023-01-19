import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../hooks/useScreen";

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
  ContainerFormsInput,
  ContainerForms,
} from "../utils/Containers";

function FormsPage() {
  const navigate = useNavigate();
  const screen = useScreen();

  const [fullName, setFullName] = useState("");
  const HandleFullName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFullName(e.target.value);
  const [modalFullName, setModalFullName] = useState(false);

  const [cpf, setCpf] = useState("");
  const HandleCpf = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCpf(e.target.value.replace(/\D/g, ""));
  const [modalCpf, setModalCpf] = useState(false);

  const [rg, setRg] = useState("");
  const HandleRg = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRg(e.target.value.replace(/\D/g, ""));
  const [modalRg, setModalRg] = useState(false);

  const [country, setCountry] = useState("");
  const HandleCountry = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCountry(e.target.value);
  const [modalCountry, setModalCountry] = useState(false);

  const [state, setState] = useState("");
  const HandleState = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value);
  const [modalState, setModalState] = useState(false);

  const [cep, setCep] = useState("");
  const HandleCep = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCep(e.target.value);
  const [modalCep, setModalCep] = useState(false);

  const [street, setStreet] = useState("");
  const HandleStreet = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStreet(e.target.value);
  const [modalStreet, setModalStreet] = useState(false);

  const [district, setDistrict] = useState("");
  const HandleDistrict = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDistrict(e.target.value);
  const [modalDistrict, setModalDistrict] = useState(false);

  const [number, setNumber] = useState("");
  const HandleNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumber(e.target.value);
  const [modalNumber, setModalNumber] = useState(false);

  const [complement, setComplement] = useState("");
  const HandleComplement = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComplement(e.target.value);
  const [modalComplement, setModalComplement] = useState(false);

  const [password, setPassword] = useState("");
  const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const [modalPassword, setModalPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const HandleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);
  const [modalConfirmPassword, setModalConfirmPassword] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(
    () =>
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
        ? setIsMobile(true)
        : setIsMobile(false),
    [screen]
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
          backgroundColor="backgroundBox"
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
            <ContainerForms isMobile={isMobile}>
              <Spacer vertical="8" />
              <Row>
                <Column grid={12}>
                  <ContainerFormsInput
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
                      onChange={(e) => HandleFullName(e)}
                    />
                  </ContainerFormsInput>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleCpf(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleRg(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={4}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleCountry(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={4}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleState(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={4}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleCep(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleStreet(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleDistrict(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleNumber(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        onChange={(e) => HandleComplement(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        type="password"
                        center
                        onChange={(e) => HandlePassword(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
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
                        type="password"
                        center
                        onChange={(e) => HandleConfirmPassword(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="14" />
              <Button
                size={
                  screen < 1138 && !isMobile ? "md" : isMobile ? "2xs" : "xlg"
                }
                color="primary"
                hover
              >
                <Text variant="body2" bold>
                  Cadastrar
                </Text>
              </Button>
              <Spacer vertical="14" />
            </ContainerForms>
          </ContentGeneralContainer>
        </Box>
        <Spacer vertical="12" />
      </MainContainer>
    </>
  );
}

export default FormsPage;
