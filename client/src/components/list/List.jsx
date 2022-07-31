import React from 'react';
import { Flex } from '../common/styled_components';

export const List = ({ children, label, disabled }) => {
  return (
    <Flex disabled={disabled}>
      <div className="items">{children}</div>
    </Flex>
  );
};
