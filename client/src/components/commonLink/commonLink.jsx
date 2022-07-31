import { useNavigate } from 'react-router-dom';
import Card from '../card';

export const LoginNavMenuItem = ({ navLink, text }) => {
  const navigate = useNavigate();
  return (
    <Card
      isFading={true}
      onAnimationEnd={false}
      onClick={() => navigate(navLink)}>
      {text}
    </Card>
  );
};
