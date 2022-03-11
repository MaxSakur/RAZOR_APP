import LoginTabs from './authTabs';
import './styles.css';

export const Auth = ({ isAuthShown }) => {
  return isAuthShown ? <LoginTabs /> : null;
};
