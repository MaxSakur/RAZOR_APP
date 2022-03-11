import React from 'react';
import { Link } from 'react-router-dom';
import { lngs } from '../../utils/i18next';
import Auth from '../auth';
import { useTranslation } from 'react-i18next';
import './styles.css';

export const NavBar = () => {
  const { i18n } = useTranslation();
  const [isAuthShown, changeIsAuthShown] = React.useState(false);
  return (
    <ul className="navbar_container">
      <li>
        <button onClick={() => changeIsAuthShown(!isAuthShown)}>
          <p>Login</p>
        </button>
        <Auth isAuthShown={isAuthShown} />
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/main">About</Link>
      </li>
      <li>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </li>
    </ul>
  );
};
