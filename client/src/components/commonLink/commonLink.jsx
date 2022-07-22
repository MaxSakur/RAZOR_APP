import { useNavigate } from 'react-router-dom';
import ListItem from '../listItem';

export const LoginNavMenuItem = ({ navLink, text }) => {
  const navigate = useNavigate();
  return (
    <ListItem
      isFading={true}
      onAnimationEnd={false}
      onClick={() => navigate(navLink)}>
      {text}
    </ListItem>
  );
};
