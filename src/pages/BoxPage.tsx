import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import styled from 'styled-components';

import Box from '../Components/Box';
import Text from '../Components/Text';
import Spacer from '../Components/Spacer';

import { MainContainer, CenterContainer } from '../utils/Containers';

function BoxPage() {
  return (
      <>
        <MainContainer
        >
          <GlobalStyle />
          <Box
            size="ssm"
            extraRounded
          >
            <CenterContainer>
              <Text variant="h4">Hello World</Text>
            </CenterContainer>
          </Box>
          <Spacer vertical='10'/>

          <Box
            size="rxs"
            rounded
  
          >
            <CenterContainer>
              <Text variant="h3">Hello World</Text>
            </CenterContainer>
          </Box>
          <Spacer vertical='10'/>
        </MainContainer>
      </>
  )
}

export default BoxPage