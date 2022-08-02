import { useDispatch, useSelector } from 'react-redux';
import RacePicker from '../racePicker';
import RolePicker from '../rolePicker';
import CharacterInfo from '../characterInfoContainer';
import Screen from '../../components/screen';
import Button from '../../components/button';
import { updateCharacterAC } from '../../store/reducers/characterReduser';
import BG from './../../assets/video/videoBG4.mp4';

export const RegisterCharacter = () => {
  const { gender, race, role } = useSelector((store) => store.character);
  const dispatch = useDispatch();
  const hangleButtonClick = (gender, race, role) => {
    dispatch(updateCharacterAC(gender, race, role));
  };
  return (
    <Screen video={BG} screenName="Registration">
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
