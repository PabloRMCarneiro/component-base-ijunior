import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface LinkProps {
  path: string;
  children: React.ReactNode;
}

function Link(props: LinkProps) {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <div
        onClick={() => navigate(props.path)}
      >
        {props.children}
      </div>
    </ThemeProvider>
  );
}

export default Link;
