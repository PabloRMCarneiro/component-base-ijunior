import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface InputProps {
  size: string;
  type: string;
  placeholder: string;
  center?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = styled.input.attrs((props)=> 
  {type: props.type})<InputProps>`
  width: ${(props) => props.theme.theme.input.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.input.sizes[props.size][1]};
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.theme.colors["greyLight"]};
  padding: 20px;
  font-size: ${(props) => props.theme.theme.input.placeholderSizes[props.size]};
  color: ${(props) => props.theme.theme.colors["grey"]};
  &:focus {
    outline: none;
  };
  &::placeholder {
    position:relative;
    color: ${(props) => props.theme.theme.colors["grey"]};
    font-size: ${(props) => props.theme.theme.input.placeholderSizes[props.size]};
    white-space: pre-line;
    ${(props) => {
      if (props.center) {
        return css`
          top: 0;
        `;
      }
      else{
        return css`
          top: -35%;
        `;
      }
    }}
  };
`;

function Input(props: InputProps) {
  return (
    <ThemeProvider theme={{ theme }}>
      <InputComponent
        size={props.size}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        center={props.center}
      />
    </ThemeProvider>
    )
}

export default Input;