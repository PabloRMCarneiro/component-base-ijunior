import React from "react";
import GlobalStyle from "../styles/GlobalStyle";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { MainContainer } from "../utils/Containers";

function ButtonPage() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Spacer vertical="18" />
      <Button size="sm" color="primary" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xs" color="primary" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="2xs" color="primary" hover bordered>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="md" color="primary" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="lg" color="primary" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xlg" color="primary" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="sm" color="success" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xs" color="success" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="2xs" color="success" hover bordered>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="md" color="success" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="lg" color="success" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xlg" color="success" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="sm" color="warning" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xs" color="warning" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="2xs" color="warning" hover bordered>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="md" color="warning" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="lg" color="warning" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xlg" color="warning" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="sm" color="danger" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xs" color="danger" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="2xs" color="danger" hover bordered>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="md" color="danger" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="lg" color="danger" bordered hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
      <Button size="xlg" color="danger" hover>
        <Text variant="body2" bold>
          Hello World
        </Text>
      </Button>
      <Spacer vertical="18" />
    </MainContainer>
  );
}

export default ButtonPage;
