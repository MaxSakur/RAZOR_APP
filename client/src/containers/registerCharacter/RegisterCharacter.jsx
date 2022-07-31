import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RacePicker from '../racePicker';
import RolePicker from '../rolePicker';
import CharacterInfo from '../characterInfoContainer';
import Screen from '../../components/screen';
import CommonContainer from '../../components/commonContainer';
import Button from '../../components/button';
import { updateCharacterAC } from '../../store/reducers/characterReduser';
import BG from './../../assets/video/videoBG4.mp4';
import { Text } from '../../components/common/styled_components';

const Note = () => {
  const [isNoteOpen, changeOpenStatus] = useState(true);
  const handleHide = () => changeOpenStatus(!isNoteOpen);
  return (
    <CommonContainer isShown={isNoteOpen} icon={true}>
      <Text>
        Hi, traveler. Its seem like you got not characters to start playing
        game. Choose GENDER, RACE and ROLE of your future character and we are
        all waiting for you inside the game. Hurry up !
      </Text>
      <Button type="close" text="close" onClick={handleHide} />
    </CommonContainer>
  );
};

export const RegisterCharacter = () => {
  const { gender, race, role } = useSelector((store) => store.character);
  const dispatch = useDispatch();
  const hangleButtonClick = (gender, race, role) => {
    dispatch(updateCharacterAC(gender, race, role));
  };
  return (
    <Screen video={BG} screenName="Registration">
      <Note />
      <CharacterInfo />
      <RacePicker />
      <RolePicker />
      <Button
        text="register"
        onClick={() => hangleButtonClick(gender, race, role)}
      />
    </Screen>
  );
};
