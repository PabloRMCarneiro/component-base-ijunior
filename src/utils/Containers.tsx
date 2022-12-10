import styled, { css } from "styled-components";

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

export const TopContainerInModal = styled.div`
  display: flex;
  width: calc(100% - 40px);
  height: 3rem;
  align-items: center;
  padding: 20px 20px;
  margin: 20px 20px 0px;
  justify-content: space-between;
`;

export const MainContainerInModal = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  height: 60%;
  align-items: center;
  padding: 20px 20px;
`;

export const BottomContainerInModal = styled.div`
  display: flex;
  width: calc(100% - 40px);
  height: 30%;
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
  width: 85%;
  height: 0.8px;
  background-color: #c4c4c4;
`;

export const LineVertical = styled.div`
  width: 0.8px;
  height: 90%;
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
  width: calc(50% - 0.8px);
  height: 100%;
  padding: 0px 3rem;
`;

export const LeftAccessContainer = styled.div`
  width: calc(50% - 0.8px);
  height: 100%;
  padding: 0px 3rem;
`;