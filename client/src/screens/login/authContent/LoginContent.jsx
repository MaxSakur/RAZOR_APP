import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Button,
  CommonForm,
  Input,
} from '../../../components/common/styled_components';
import { textCapitalize } from '../../../utils/textCapitalize';
import { playCursorSound } from '../../../utils/moveCursorSound';
import { loginAC } from '../../../store/reducers/userReducer';

export const LoginContent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('max.kaliakin@gmail.com');
  const [password, setPassword] = React.useState('Aerithff7');

  const onActionPress = async () => {
    playCursorSound(true);
    dispatch(loginAC(email, password));
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
