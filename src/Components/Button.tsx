import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface ButtonProps {
  size: string;
  onClick?: () => void;
  color?: string;
  hover?: boolean;
  bordered?: boolean;
  shadow?: string;
  children?: React.ReactNode;
  extraRounded?: boolean;
}

export const ButtonComponent = styled.button<ButtonProps>`
  width: ${(props) => props.theme.theme.buttonSizes[props.size][0]};
  height: ${(props) => props.theme.theme.buttonSizes[props.size][1]};
  background-color: ${(props) => props.theme.theme.colors[props.color || "primary"]};
  font-weight: ${(props) => props.theme.theme.font?.fontWeight};
  border: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  box-shadow: ${(props) => props.theme.theme.shadows[props.shadow || "none"]};
  border-radius: ${(props) => props.theme.theme.borderRadius.r};
  &:hover {
    ${(props) => {
      if (props.hover) {
        return css`
          background-color: ${props.theme.theme.colors[props.color+'LightHover']};
          color: ${props.theme.theme.colors[props.color+'SolidHover']};
        `;
        }
      }
    }
  }
  &:active {
    background-color: ${(props) => props.theme.theme.colors[props.color || "primary"]};
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  ${(props) => {
    if (props.bordered) {
      return css`
        border: 2px solid ${props.theme.theme.colors[props.color+'Border']};
        background-color: transparent;
        color: ${props.theme.theme.colors[props.color+'Border']};
      `;
    }
    if(props.extraRounded){
      return css`
        border-radius: ${props.theme.theme.borderRadius.xr};
      `;
    }
  }}
`;

function Button(props: ButtonProps) {
  return (
    <ThemeProvider theme={{ theme }}>
      <ButtonComponent
        size={props.size}
        color={props.color}
        extraRounded={props.extraRounded}
        hover={props.hover}
        bordered={props.bordered}
        shadow={props.shadow}
        onClick={props.onClick}
      >
        {props.children}
      </ButtonComponent>
    </ThemeProvider>
  );
}

export default Button;
