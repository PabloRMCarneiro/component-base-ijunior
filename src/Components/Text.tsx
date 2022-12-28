import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface TextProps {
  variant: string;
  children?: React.ReactNode;
  bold?: boolean;
  color?: string;
  onClick?: () => void;
  center?: boolean;
  justify?: boolean;
  hover?: boolean;
}

export const TextComponent = styled.p<TextProps>`
  
  font-size: ${(props) =>
    props.theme.theme.text[props.variant || "h3"].fontSize};
  line-height: ${(props) =>
    props.theme.theme.text[props.variant || "h3"].lineHeight};
  font-family: ${(props) => props.theme.theme.text.fontFamily};
  color: ${(props) => props.theme.theme.colors[props.color || "none"]};
  transition: 0.4s ease-in-out;
  
  &:hover {
    ${(props) => {
      if (props.hover) {
        return css`
          cursor: pointer;
          color: ${props.theme.theme.colors[props.color + "LightHover"]};
        `;
      }
    }}
  }
  
  ${(props) => {
    if (props.bold) {
      return css`
        font-weight: bold;
      `;
    }
    if (props.justify) {
      return css`
        text-align: justify;
      `;
    }
    if (props.center) {
      return css`
        text-align: center;
      `;
    }
  }};
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.t}) {
    font-size: calc(${(props) =>
    props.theme.theme.text[props.variant || "h3"].fontSize}*0.8);
  };
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.ml}) {
    font-size: calc(${(props) =>
    props.theme.theme.text[props.variant || "h3"].fontSize}*0.6);
  }
`;

function Text(props: TextProps) {
  return (
    <ThemeProvider theme={theme}>
      <TextComponent
        variant={props.variant}
        bold={props.bold}
        color={props.color}
        onClick={props.onClick}
        center={props.center}
        justify={props.justify}
        hover={props.hover}
      >
        {props.children}
      </TextComponent>
    </ThemeProvider>
  );
}

export default Text;
