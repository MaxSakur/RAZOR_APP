import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { login } from '../../../actions/userAuth';
import {
  Button,
  CommonForm,
  Input,
} from '../../../components/common/styled_components';
import { textCapitalize } from '../../../utils/textCapitalize';
import EnterIcon from '../../../assets/images/svg_icons/EnterIcon';

export const LoginContent = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onActionPress = () => {
    dispatch(login(email, password));
  };

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
      />
      <Button
        disabled={email.length < 1 || password.length < 1}
        onClick={onActionPress}>
        <EnterIcon height={18} color="#fff" />
        <p>{t('auth.login.loggedIn')}</p>
      </Button>
    </CommonForm>
  );
};
