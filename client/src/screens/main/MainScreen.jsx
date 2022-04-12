import { useDispatch } from 'react-redux';
import {
  LogOutButton,
  Screen,
} from '../../components/common/styled_components';
import Character from '../../containers/character';
import { logOutAC } from '../../reducers/userReducer';
import BG from './../../assets/images/screens_bg/login_bg-min.jpeg';

export const MainScreen = () => {
  const dispatch = useDispatch();
  const onActionPress = () => {
    dispatch(logOutAC());
  };
  return (
    <Screen bg={BG}>
      {/* TODO: Add routes for main screen */}
      <Character />
      <LogOutButton onClick={() => onActionPress()}>OUT</LogOutButton>
    </Screen>
  );
};
