import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface InputProps {
  size: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = styled.input.attrs((props)=> 
  {type: props.type})<InputProps>`
  width: ${(props) => props.theme.theme.input.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.input.sizes[props.size][1]};
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.theme.colors["greyLight"]};
  padding: 15px;
  font-size: 1.4rem;
  color: ${(props) => props.theme.theme.colors["grey"]};
  &:focus {
    outline: none;
  };
  &::placeholder {
    white-space:pre-line;  
    position:relative;
    top:-35%;
    color: ${(props) => props.theme.theme.colors["grey"]};
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
      />
    </ThemeProvider>
    )
}

export default Input;