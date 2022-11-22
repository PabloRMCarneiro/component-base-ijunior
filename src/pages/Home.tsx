import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
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
      <div>
        <Button
          message="Exemplos de Botões"
          size={{ width: "5xl", height: "xl" }}
          font={{ size: "sm", color: "white", fontWeight: 500 }}
          radius="md"
          color="primarySolidContrast"
          hover={{ color: "primaryLightContrast", fontColor: "white" }}
          onClick={() => navigate("/buttons")}
        />
      </div>
    </div>
  );
}

export default Home;
