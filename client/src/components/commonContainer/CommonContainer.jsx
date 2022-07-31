import React from 'react';
import {
  Container,
  ContainerHeader,
  ContainerBody,
} from './../common/styled_components';

export const CommonContainer = ({ header, isShown = true, icon, children }) => {
  return (
    <Container isShown={isShown}>
      {header && (
        <>
          <ContainerHeader>{header}</ContainerHeader>
          {icon && <p>123</p>}
        </>
      )}
      <ContainerBody>{children}</ContainerBody>
    </Container>
  );
};
