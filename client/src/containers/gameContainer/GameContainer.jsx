import React from 'react';
import LogOutButton from '../../components/logOutButton';
import { RegisterCharacter } from '../registerCharacter/RegisterCharacter';
import { Provider } from 'react-redux';

export const GameContainer = () => {
  return (
    <>
      <RegisterCharacter />
      <LogOutButton />
    </>
  );
};
