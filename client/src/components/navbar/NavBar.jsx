import * as React from 'react';
import { Link } from 'react-router-dom';
import { lngs } from '../../utils/i18next';
import Auth from '../auth';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserAC } from '../../reducers/userReducer';
import './styles.css';

export const NavBar = () => {
  const { t } = useTranslation();
  const [toggle, setToggleChagne] = React.useState(true);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [isAuthShown, changeIsAuthShown] = React.useState(false);

  const handleLanguageChange = (event) => {
    // changeIsAuthShown(!isAuthShown);
    setToggleChagne(!toggle);
    Object.keys(lngs).map((lng) => i18n.changeLanguage(lng));
  };

  return (
    <div>
      <Auth isAuthShown={isAuthShown} isAuthOpenChange={changeIsAuthShown} />
      <Link to="/home">Home</Link>
      <Link to="/main">Main</Link>
      <div className="user_icon">
        <button onClick={() => changeIsAuthShown(!isAuthShown)}>
          <p>{t('auth.login.logOut')}</p>
        </button>
      </div>

      {/* <FormControlLabel
        control={
          <Switch
            checked={toggle}
            onChange={handleLanguageChange}
            aria-label="login switch"
          />
        }
        label={toggle ? 'EN' : 'UA'}
      /> */}

      {/* <MenuItem onClick={() => dispatch(clearUserAC())}>
        {t('auth.login.login')}
      </MenuItem> */}
    </div>
  );
};
