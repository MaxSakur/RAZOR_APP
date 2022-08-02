import React from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../../components/logOutButton';
import { RegisterCharacter } from '../registerCharacter/RegisterCharacter';

export const LobbyContainer = () => {
  const isCharacterRegistered = useSelector(
    (store) => store.character.isCharacterRegistered,
  );
  console.log(isCharacterRegistered);
  return (
    <>
      {isCharacterRegistered ? <p>1</p> : <RegisterCharacter />}
      <LogOutButton />
    </>
  );
};
