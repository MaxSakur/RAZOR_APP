import React from 'react';
import { useDispatch } from 'react-redux';
import {
  LogOutButton,
  Screen,
} from '../../components/common/styled_components';
import { logOutAC } from '../../reducers/userReducer';
import BG from './../../assets/images/screens_bg/login_screen_bg-min.jpeg';

export const LoginScreen = ({ data }) => {
  const dispatch = useDispatch();
  const onActionPress = () => {
    dispatch(logOutAC());
  };

  return (
    <Screen bg={BG}>
      {data}
      {/* move to separate component */}
      <LogOutButton onClick={() => onActionPress()}>OUT</LogOutButton>
    </Screen>
  );
};
