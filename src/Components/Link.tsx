import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface LinkProps {
  path: string;
  children: React.ReactNode;
}

const LinkComponent = styled.div`
  cursor: pointer;
`;
function Link(props: LinkProps) {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <LinkComponent
        onClick={() => navigate(props.path)}
      >
        {props.children}
      </LinkComponent>
    </ThemeProvider>
  );
}

export default Link;
