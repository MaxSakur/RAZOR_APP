import { useDispatch } from 'react-redux';
import {
  LogOutButton,
  Screen,
} from '../../components/common/styled_components';
import Character from '../../containers/character';
import { logOutAC } from '../../store/reducers/userReducer';
import BG from './../../assets/images/screens_bg/loading.jpg';

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
