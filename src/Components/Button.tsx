import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface ButtonProps {
  size: string;
  onClick?: () => void;
  color?: string;
  hover?: boolean;
  bordered?: boolean;
  children?: React.ReactNode;
  extraRounded?: boolean;
}

export const ButtonComponent = styled.button<ButtonProps>`
  
  width: ${(props) => props.theme.theme.button.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.button.sizes[props.size][1]};
  background-color: ${(props) => props.theme.theme.colors[props.color || "primary"]};
  font-weight: ${(props) => props.theme.theme.font?.fontWeight};
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.theme.shadows.button};
  transition: 0.4s ease-in-out;
  border-radius: ${(props) => props.theme.theme.borderRadius.r};
  color:${(props) => props.theme.theme.colors[props.color+'LightActive']};
  
  &:hover {
    ${(props) => {
      if (props.hover) {
        return css`
          background-color: ${props.theme.theme.colors[props.color+'Border']};
          color: ${props.theme.theme.colors[props.color+'LightHover']};
        `;
        }
      }
    }
  }
  
  &:active {
    ${(props) =>{
      return css`
        background-color: ${props.theme.theme.colors[props.color+'SolidHover']};
        transform: scale(0.95);
        border: none;
      `;
    }}
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
    
  }};
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.t}) {
    width: calc(${(props) => props.theme.theme.button.sizes[props.size][0]}*0.8);
    height: calc(${(props) => props.theme.theme.button.sizes[props.size][1]}*0.8);
  };
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.ml}) {
    width: calc(${(props) => props.theme.theme.button.sizes[props.size][0]}*0.65);
    height: calc(${(props) => props.theme.theme.button.sizes[props.size][1]}*0.65);
  }
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
        onClick={props.onClick}
      >
        {props.children}
      </ButtonComponent>
    </ThemeProvider>
  );
}

export default Button;
