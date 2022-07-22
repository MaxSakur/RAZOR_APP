import { Button, Screen } from '../../components/common/styled_components';
import RacePicker from '../racePicker';
import RolePicker from '../rolePicker';
import CharacterInfo from '../characterInfoContainer';
import BG from './../../assets/images/screens_bg/login_bg-min.jpeg';

export const RegisterCharacter = () => {
  return (
    <Screen bg={BG}>
      <CharacterInfo />
      <RacePicker />
      <RolePicker />
      <Button>
        <p>CREATE NEW CHARACTER</p>
      </Button>
    </Screen>
  );
};
