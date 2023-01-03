import styled, { css } from "styled-components";
import { theme } from "../styles/theme";


export const InternalContainerNavbar = styled.div`
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
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

export const FooterContainerNavbar = styled.div`
  width: 11.625rem;
  height: 2.875rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InternalFooterContainerNavbar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InternalContainerTopbar = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 4rem);
  height: 100%;
  margin-left: 2rem;
  justify-content: space-between;
`;

export const LinkContainerTopbar = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface BottomBarTopbarProps {
  color: string;
};

export const BottomBarTopbar = styled.span<BottomBarTopbarProps>`
  border-bottom: 4px solid ${(props) => props.theme.theme.colors[props.color]};
  border-radius: 25%;
  position: relative;
  top: 1.75rem;
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

export const TopContainerInModal = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  padding: 1.25rem 1.25rem;
  justify-content: space-between;
  @media (max-width: ${theme.breakpoints.t}) {
    height: calc(4rem * 0.75);
  }
  @media (max-width: ${theme.breakpoints.ml}) {
    height: calc(4rem * 0.5);
  } ;
`;

interface MainContainerModalProps {
  type?: string;
  onClick?: () => void;
  ref?: React.RefObject<HTMLHeadingElement>;
};

export const MainContainerInModal = styled.div<MainContainerModalProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 63%;
  align-items: center;
  padding: 1.25rem 1.25rem;
  @media (max-width: ${theme.breakpoints.t}) {
    ${(props) => {
      if (props.type === "3") {
        return css`
          height: 63%;
        `;
      } else {
        return css`
          height: calc(63% * 0.8);
        `;
      }
    }}
  }
  @media (max-width: ${theme.breakpoints.ml}) {
    ${(props) => {
      if (props.type === "3") {
        return css`
          height: calc(63% * 0.96);
        `;
      } else if (props.type === "validation") {
        return css`
          height: calc(63% * 0.5);
        `;
      } else {
        return css`
          height: calc(63% * 0.8);
        `;
      }
    }};
    padding: 0.625rem 0.9375rem;
  }
`;

export const BottomContainerInModal = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem 1.25rem;
  justify-content: center;
`;

export const CenterContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
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

interface LineProps {
  color?: string;
  weight?: string;
};

export const LineVertical = styled.div<LineProps>`
  width: 0.8px;
  height: 100%;
  background-color: #c4c4c4;
  ${(props) => {
    if (props.color) {
      return css`
        background-color: ${props.theme.theme.colors[props.color]};
      `;
    } else {
      return css`
        background-color: #c4c4c4;
      `;
    }
  }}
  ${(props) => {
    if (props.weight) {
      return css`
        width: ${props.weight+"px"};
      `;
    } else {
      return css`
        width: 0.8px;
      `;
    }
  }}
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
  padding: 0 2rem;
`;

export const LeftAccessContainer = styled.div`
  width: calc(50% - 0.8px);
  height: 100%;
  padding: 0 2rem;
`;

export const TitleGeneralContainer = styled.div`
  width: 90%;
  display: flex;
`;

export const ContentGeneralContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const TopContainerTopBarMobile = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
`;

export const TopContainerGeneralFilterContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  border: 1px solid red;
`;

export const LinkContainerGeneralFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface BottomBarGeneralFIlterContainerProps {
  color: string;
};

export const BottomBarGeneralFIlterContainer = styled.span<BottomBarGeneralFIlterContainerProps>`
  border-bottom: 4px solid ${(props) => props.theme.theme.colors[props.color]};
  position: relative;
`;

export const ContainerFormsInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

interface ContainerFormsProps {
  isMobile?: boolean;
};

export const ContainerForms = styled.div<ContainerFormsProps>`
  width: calc(100% - 2rem);
  height: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => {
    return css `
      margin-left: ${props.isMobile ? "1rem" : "2rem"}
    `;
  }}
`;