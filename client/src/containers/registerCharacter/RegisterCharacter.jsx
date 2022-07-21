// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useDispatch } from 'react-redux';
import RacePicker from '../../components/racePicker';
import { Screen } from '../../components/common/styled_components';
import BG from './../../assets/images/screens_bg/login_bg-min.jpeg';
import CharacterInfo from '../characterInfoContainer';

export const RegisterCharacter = () => {
  // const dispatch = useDispatch();
  // const [questionIndex, chooseQuestionIndex] = useState(0);
  // const { t } = useTranslation();

  return (
    <Screen bg={BG}>
      <CharacterInfo />
      <RacePicker />
      {/*
      
      <RolePicker />
      <PowerPicker /> */}
    </Screen>
  );
};
