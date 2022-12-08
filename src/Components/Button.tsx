import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface ButtonProps {
  size: string;
  onClick?: () => void;
  color?: string;
  radius?: string;
  hover?: hoverProps;
  bordered?: boolean;
  shadow?: string;
  children?: React.ReactNode;
}

interface hoverProps {
  color?: string;
  fontColor?: string;
}

export const ButtonComponent = styled.button<ButtonProps>`
  width: ${(props) => props.theme.theme.buttonSizes[props.size][0]};
  height: ${(props) => props.theme.theme.buttonSizes[props.size][1]};
  background-color: ${(props) => props.theme.theme.colors[props.color || "primary"]};
  font-weight: ${(props) => props.theme.theme.font?.fontWeight};
  border: none;
  cursor: pointer;
  border-radius: ${(props) => props.theme.theme.sizes[props.radius || "md"]};  
  transition: 0.3s ease-in-out;
  box-shadow: ${(props) => props.theme.theme.shadows[props.shadow || "none"]};
  &:hover {
    background-color: ${(props) => props.theme.theme.colors[props.hover?.color || "primarySolidHover"]};
    color: ${(props) => props.theme.theme.colors[props.hover?.fontColor || "white"]};
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
        border: 2px solid ${props.theme.theme.colors[props.color || "primary"]};
        background-color: transparent;
        color: ${props.theme.theme.colors[props.color || "primary"]};
        &:hover {
          background-color: ${props.theme.theme.colors[props.color || "primary"]};
          color: ${props.theme.theme.colors[props.hover?.fontColor || "white"]};            
        }
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
        radius={props.radius}
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
