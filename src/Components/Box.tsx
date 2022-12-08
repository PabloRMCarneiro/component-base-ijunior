import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface BoxProps {
  size: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  extraRounded?: boolean;
}

const BoxComponent = styled.div<BoxProps>`
  width: ${(props) => props.theme.theme.box.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.box.sizes[props.size][1]};
  background-color: ${(props) => props.theme.theme.colors[props.backgroundColor || "primary"]};
  ${(props) => {
    if (props.rounded) {
      return css`
        border-radius: ${(props) => props.theme.theme.borderRadius.r};
      `;
    }
    if (props.extraRounded) {
      return css`
        border-radius: ${(props) => props.theme.theme.borderRadius.xr};
      `;
    }
  }};
`;

function Box(props: BoxProps) {
  return (
    <ThemeProvider theme={theme}>
      <BoxComponent
        size={props.size}
        backgroundColor={props.backgroundColor}
        rounded={props.rounded}
        extraRounded={props.extraRounded}
      >
        {props.children}
      </BoxComponent>
    </ThemeProvider>
  )
}

export default Box