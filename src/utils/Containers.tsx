import styled, { css } from "styled-components";
import { theme } from '../styles/theme';

interface MainContainerModalProps {
  type?: string;
  onClick?: () => void;
  ref?: React.RefObject<HTMLHeadingElement>;
}

export const InternalContainerNavbar = styled.div`
  width: calc(100% - 1rem);
  height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkContainerNavbar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const MainContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 50;
`;

export const MainContainerLoader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const TopContainerInModal = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  padding: 20px 20px;
  justify-content: space-between;
  @media(max-width: ${theme.breakpoints.t}){
    height: calc(4rem * 0.75);
  };
  @media(max-width: ${theme.breakpoints.ml}){
    height: calc(4rem * 0.5);
  };
`;

export const MainContainerInModal = styled.div<MainContainerModalProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 63%;
  align-items: center;
  padding: 20px 20px;
  @media(max-width: ${theme.breakpoints.t}){
    ${(props) =>{
      if(props.type === "3"){
        return css `
        height: 63%;
        `;
      }else{
        return css `
        height: calc(63%*0.8);
        `;
      }
    }}
  };
  @media(max-width: ${theme.breakpoints.ml}){
    ${(props) =>{
      if(props.type === "3"){
        return css `
          height: calc(63%*0.96);
        `;
      }
      else if(props.type === "validation"){
        return css `
          height: calc(63%*0.5);
        `;
      }
      else{
        return css `
          height: calc(63%*0.8);
        `;
      }
    }};
    padding: 10px 15px;
  }
  `;

export const BottomContainerInModal = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 20px;
  justify-content: center;
  
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CenterHorizontalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterVerticalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LineHorizontal = styled.div`
  width: 100%;
  height: 0.8px;
  background-color: #c4c4c4;
`;

export const LineVertical = styled.div`
  width: 0.8px;
  height: 100%;
  background-color: #c4c4c4;
`;

export const MainAceessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightAccessContainer = styled.div`
  display: flex;
  width: calc(50% - 0.8px);
  height: 100%;
  padding: 0px 2rem;
`;

export const LeftAccessContainer = styled.div`
  width: calc(50% - 0.8px);
  height: 100%;
  padding: 0px 2rem;
`;
