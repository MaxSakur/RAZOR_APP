import React from 'react';
import Input from '../../../input';
import { login } from '../../../../actions/userAuth';
import { LockOpenOutlined, AccountCircleRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { textCapitalize } from '../../../../utils/textCapitalize';
import { useDispatch } from 'react-redux';

export const LoginContent = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onActionPress = () => {
    dispatch(login(email, password));
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      autoComplete="on">
      <Input
        type="text"
        label={textCapitalize(t('auth.login.email'))}
        placeholder={textCapitalize(t('auth.login.enterEmail'))}
        value={email}
        setValue={setEmail}
        icon={<AccountCircleRounded />}
      />
      <Input
        type="password"
        label={textCapitalize(t('auth.login.password'))}
        placeholder={textCapitalize(t('auth.login.enterPassword'))}
        value={password}
        setValue={setPassword}
        icon={<LockOpenOutlined />}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ margin: '12px 12px 8px' }}
        disabled={email.length < 1 || password.length < 1}
        onClick={onActionPress}>
        {t('auth.login.loggedIn')}
      </Button>
    </form>
  );
};
