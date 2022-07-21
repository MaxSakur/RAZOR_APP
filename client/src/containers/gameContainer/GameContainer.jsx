import React from 'react';
import LogOutButton from '../../components/logOutButton';
import { RegisterCharacter } from '../registerCharacter/RegisterCharacter';

export const GameContainer = () => {
  return (
    <div>
      <RegisterCharacter />
      <LogOutButton />
    </div>
  );
};
