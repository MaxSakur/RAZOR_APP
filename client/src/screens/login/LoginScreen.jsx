import { useNavigate } from 'react-router-dom';
import { playCursorSound } from '../../utils/moveCursorSound';
import './styles.css';

const LoginSelect = () => {
  const navigate = useNavigate();
  const login_menu_items = [
    { text: 'Login', link: '/main' },
    { text: 'Registration', link: '/main' },
    { text: 'Options', link: '/home' },
    { text: 'About', link: '/home' },
  ];
  return (
    <ul className="login_select">
      {login_menu_items.map((item, index) => {
        return (
          <li
            onMouseEnter={(e) => {
              playCursorSound();
              e.target.className = 'active';
            }}
            onMouseLeave={(e) => (e.target.className = '')}
            onClick={() => {
              playCursorSound(true);
              navigate(item.link);
            }}>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export const LoginScreen = () => {
  return (
    <div className="loginContainer">
      <LoginSelect />
    </div>
  );
};
