import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutAC } from '../../store/reducers/userReducer';
import { LogOutButton } from './../common/styled_components';

export const LogOut = () => {
  const dispatch = useDispatch();
  const onActionPress = () => dispatch(logOutAC());
  return <LogOutButton onClick={() => onActionPress()}>OUT</LogOutButton>;
};
