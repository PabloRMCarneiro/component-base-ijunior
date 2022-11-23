import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <GlobalStyle />
        <Button
          message="Exemplos de Buttons"
          size={{ width: "5xl", height: "xl" }}
          font={{ size: "sm", color: "white", fontWeight: 500 }}
          radius="md"
          color="primarySolidContrast"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          onClick={() => navigate("/buttons")}
        />
        <Spacer vertical = "18"/>
        <Button
          message="Exemplos de Spacers"
          size={{ width: "5xl", height: "xl" }}
          font={{ size: "sm", color: "white", fontWeight: 500 }}
          radius="md"
          color="primarySolidContrast"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          onClick={() => navigate("/spacer")}
        />
    </div>
  );
}

export default Home;
