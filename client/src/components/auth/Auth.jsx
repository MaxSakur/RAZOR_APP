import LoginTabs from './authTabs';
import './styles.css';

export const Auth = ({ isAuthShown, isAuthOpenChange }) => {
  return isAuthShown ? (
    <LoginTabs isAuthShown={isAuthShown} isAuthOpenChange={isAuthOpenChange} />
  ) : null;
};
