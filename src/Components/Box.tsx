import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface BoxProps {
  size: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  extraRounded?: boolean;
  shadow?: string;
  absolute?: boolean;
}

const BoxComponent = styled.div<BoxProps>`
  
  width: ${(props) => props.theme.theme.box.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.box.sizes[props.size][1]};
  background-color: ${(props) => props.theme.theme.colors[props.backgroundColor || "primary"]};
  box-shadow: ${(props) => props.theme.theme.shadows[props.shadow || "none"]};
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
    if (props.absolute) {
      return css`
        position: absolute;
        `;
    }
  }};
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.t}) {
    ${(props) => {
      if(props.size != "navbarFull" && props.size != "navbarShort" && props.size != "topbarFull" && props.size != "generalContainer"){
        return css`
          width: calc(${(props) => props.theme.theme.box.sizes[props.size][0]}*0.8);
          height: calc(${(props) => props.theme.theme.box.sizes[props.size][1]}*0.8);
        `;

      }
    }}
  };
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.ml}) {
    ${(props) => {
      if(props.size != "navbarFull" && props.size != "navbarShort" && props.size != "topbarFull" && props.size != "generalContainer"){
        return css`
          width: calc(${(props) => props.theme.theme.box.sizes[props.size][0]}*0.);
          height: calc(${(props) => props.theme.theme.box.sizes[props.size][1]}*0.65);
        `;

      }
    }}
  };
  
`;

function Box(props: BoxProps) {
  return (
    <ThemeProvider theme={theme}>
      <BoxComponent
        size={props.size}
        backgroundColor={props.backgroundColor}
        rounded={props.rounded}
        extraRounded={props.extraRounded}
        shadow={props.shadow}
        absolute={props.absolute}
      >
        {props.children}
      </BoxComponent>
    </ThemeProvider>
  )
}

export default Box