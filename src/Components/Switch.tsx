/* import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface SwitchProps {
  size: string;
  color: string;
  onChange?: () => void;
  children?: React.ReactNode;
}

interface CheckBoxLabelProps {
  size: string;
}

interface CheckBoxProps {
  size: string;
  color: string;
};

export var checked: boolean = false;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label<CheckBoxLabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.theme.theme.switch.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.switch.sizes[props.size][1]};
  border-radius: ${(props) => props.theme.theme.switch.borderRadius[props.size]};
  background: ${(props) => props.theme.theme.colors.grey};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${(props) => props.theme.theme.switch.radiusCircle[props.size]};
    height: ${(props) => props.theme.theme.switch.radiusCircle[props.size]};
    margin: ${(props) => props.theme.theme.switch.margin[props.size]};;
    background: ${(props) => props.theme.theme.colors.white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input<CheckBoxProps>`
  opacity: 0;
  z-index: 1;
  border-radius: ${(props) => props.theme.theme.switch.borderRadius[props.size]};
  width: ${(props) => props.theme.theme.switch.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.switch.sizes[props.size][1]};
  &:checked + ${CheckBoxLabel} {
    background: ${(props) => {
      checked = true;
      return props.theme.theme.colors[props.color];
    }};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${(props) => props.theme.theme.switch.radiusCircle[props.size]};
      height: ${(props) => props.theme.theme.switch.radiusCircle[props.size]};
      margin-left: ${(props) => props.theme.theme.switch.translateX[props.size]};
      transition: 0.2s;
    }
  }
`;

function Switch(props: SwitchProps) {

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <ThemeProvider theme={theme}>
      <CheckBoxWrapper>
        <CheckBox 
          id="checkbox" 
          type="checkbox" 
          color={props.color}
          size={props.size}
        />
        <CheckBoxLabel htmlFor="checkbox" size={props.size} />
      </CheckBoxWrapper>
    </ThemeProvider>
  );
}

export default Switch;
 */

import React from 'react'

function Switch() {
  return (
    <div>Switch</div>
  )
}

export default Switch