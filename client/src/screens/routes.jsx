import { Route, Routes } from 'react-router-dom';
import LoginScreen from './login';
import MainScreen from './main';
import LoginScreenData from './login/loginMenu';
import RegisterCharacter from './registerCharacter';

export const useRoutes = (isLogged) => {
  if (!isLogged) {
    return <LoginScreen data={<LoginScreenData />} />;
  }

  return (
    <Routes>
      <Route index path="/" element={<MainScreen />} />
      <Route path="/registrateCharacter" element={<RegisterCharacter />} />
      <Route path="/login" element={<RegisterCharacter />} />
    </Routes>
  );
};
