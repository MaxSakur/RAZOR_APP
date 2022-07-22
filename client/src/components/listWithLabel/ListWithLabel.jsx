import React from 'react';
import { Flex } from '../common/styled_components';

export const ListWithLabel = ({ children, label, disabled }) => {
  return (
    <Flex disabled={disabled}>
      <p className="label">{label}</p>
      <div className="items">{children}</div>
    </Flex>
  );
};
