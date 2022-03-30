import React from 'react';
import {
  TopSection,
  BottomSection,
  Container,
} from '../../components/common/styled_components';
import BG from './../../assets/images/screens_bg/login_screen_bg-min.jpeg';

export const LoginScreen = ({ topData, bottomData }) => {
  return (
    <Container bg={BG}>
      <TopSection>{topData}</TopSection>
      <BottomSection>{bottomData}</BottomSection>
    </Container>
  );
};
