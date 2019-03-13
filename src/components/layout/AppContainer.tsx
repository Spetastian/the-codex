import * as React from "react";
import styled from "styled-components";

const Content = styled.div`
  max-width: 800px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ children }: any) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);
