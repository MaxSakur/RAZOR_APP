import React from 'react';
import { registration } from '../../../actions/userAuth';
import { useTranslation } from 'react-i18next';
import { textCapitalize } from '../../../utils/textCapitalize';
import {
  Button,
  CommonForm,
  Input,
} from '../../../components/common/styled_components';

export const RegistrationContent = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const { t } = useTranslation();
  const onActionPress = () => {
    if (password.length <= 3 || password.length > 12) {
      alert(t('auth.registration.passwordRules'));
    }
    registration(email, password);
  };
  return (
    <CommonForm>
      <Input
        type="text"
        label={textCapitalize(t('auth.registration.email'))}
        placeholder={textCapitalize(t('auth.registration.enterEmail'))}
        value={email}
        setValue={setEmail}
      />
      <Input
        type="password"
        label={textCapitalize(t('auth.registration.password'))}
        placeholder={textCapitalize(t('auth.registration.enterPassword'))}
        value={password}
        setValue={setPassword}
      />
      <Input
        type="password"
        label={textCapitalize(t('auth.registration.repeatPassword'))}
        placeholder={textCapitalize(t('auth.registration.repeatPassword'))}
        value={repeatPassword}
        setValue={setRepeatPassword}
      />
      <Button
        disabled={
          email.length < 1 || password.length < 1 || repeatPassword !== password
        }
        onClick={onActionPress}>
        {t('auth.registration.registerNewUser')}
      </Button>
    </CommonForm>
  );
};