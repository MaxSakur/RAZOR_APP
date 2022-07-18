import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { login } from '../../../actions/userAuth';
import {
  Button,
  CommonForm,
  Input,
} from '../../../components/common/styled_components';
import { textCapitalize } from '../../../utils/textCapitalize';
import { useNavigate } from 'react-router-dom';
import { playCursorSound } from '../../../utils/moveCursorSound';
import { loginAC } from '../../../store/reducers/userReducer';

export const LoginContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isLoggedSuccess = useSelector((state) => state);
  const isCharacterRegistered = useSelector(
    (state) => state.character.isCharacterRegistered,
  );

  const onActionPress = async () => {
    playCursorSound(true);
    // ???
    // await dispatch(login(email, password));
    dispatch(loginAC(email, password));
    // Need to add redux thunk
    isLoggedSuccess && navigate(isCharacterRegistered ? '/' : '/');
  };

  const isLoginButtonDisabled = email.length < 1 || password.length < 1;

  return (
    <CommonForm>
      <Input
        type="text"
        label={textCapitalize(t('auth.login.email'))}
        placeholder={textCapitalize(t('auth.login.enterEmail'))}
        value={email}
        setValue={setEmail}
      />

      <Input
        label={textCapitalize(t('auth.login.password'))}
        placeholder={textCapitalize(t('auth.login.enterPassword'))}
        value={password}
        setValue={setPassword}
        onKeyDown={(e) => e.key === 'Enter' && onActionPress}
      />
      <Button disabled={isLoginButtonDisabled} onClick={onActionPress}>
        <p>{t('auth.login.loggedIn')}</p>
      </Button>
    </CommonForm>
  );
};
