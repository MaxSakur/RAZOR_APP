import React from 'react';
import { useDispatch } from 'react-redux';
import {
  TopSection,
  BottomSection,
  LogOutButton,
  Screen,
} from '../../components/common/styled_components';
import { logOutAC } from '../../reducers/userReducer';
import BG from './../../assets/images/screens_bg/login_screen_bg-min.jpeg';

export const LoginScreen = ({ topData, bottomData }) => {
  const dispatch = useDispatch();
  const onActionPress = () => {
    dispatch(logOutAC());
  };

  return (
    <Screen bg={BG}>
      <TopSection>{topData}</TopSection>
      <BottomSection>{bottomData}</BottomSection>
      <LogOutButton onClick={() => onActionPress()}>OUT</LogOutButton>
    </Screen>
  );
};
