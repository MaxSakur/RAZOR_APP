import { Route, Routes } from 'react-router-dom';
import LoginScreen from './login';
import MainScreen from './main';
import { LoginMenu } from './login/loginMenu/LoginMenu';
import { TopSectionRoutes } from './login/loginRoutes';
import RegisterCharacter from './registerCharacter';

export const useRoutes = (isLogged) => {
  if (!isLogged) {
    return (
      <LoginScreen topData={<TopSectionRoutes />} bottomData={<LoginMenu />} />
    );
  }

  return (
    <Routes>
      <Route index path="/" element={<MainScreen />} />
      <Route path="/registrateCharacter" element={<RegisterCharacter />} />
      <Route path="/login" element={<RegisterCharacter />} />
    </Routes>
  );
};
