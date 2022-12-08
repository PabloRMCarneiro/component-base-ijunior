import styled, {css} from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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
  height: 50%;
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
  width: calc(100% - 50px);
  height: 0.8px;
  background-color: #C4C4C4;
`;
