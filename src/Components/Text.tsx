import React from 'react'
import styled, {css, ThemeProvider} from 'styled-components';
import {theme} from '../styles/theme';

interface TextProps {
  variant: string;
  children?: React.ReactNode;
  bold?: boolean;
  color?: string;
  onClick?: () => void;
}

export const TextComponent = styled.p<TextProps>`
  font-size: ${(props) => props.theme.theme.text[props.variant || "h3"].fontSize};
  line-height: ${(props) => props.theme.theme.text[props.variant || "h3"].lineHeight};
  font-family: ${(props) => props.theme.theme.text.fontFamily};
  color: ${(props) => props.theme.theme.colors[props.color || "black"]};
  ${(props) => {
    if(props.bold){
      return css`
        font-weight: bold;
      `;
    }
  }}
`;

function Text(props: TextProps) {
  return (
    <ThemeProvider theme={theme}>
      <TextComponent
        variant={props.variant}
        bold={props.bold}
        color={props.color}
        onClick={props.onClick}
        
      >
        {props.children}
      </TextComponent>
    </ThemeProvider>
    )
}

export default Text