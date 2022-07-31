import React from 'react';
import { Button as CommonButton } from './../common/styled_components';

export const Button = ({ onClick, text }) => {
  return <CommonButton onClick={onClick}>{text}</CommonButton>;
};
