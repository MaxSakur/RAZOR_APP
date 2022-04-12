import { Navigate, Route, Routes } from 'react-router-dom';
import LoginScreen from './login';
import MainScreen from './main';
import { LoginMenu } from './login/loginMenu/LoginMenu';
import { TopSectionRoutes } from './login/loginRoutes';
import RegisterCharacter from './registerCharacter';
import { useSelector } from 'react-redux';

export const useRoutes = (isAuthorized) => {
  const isCharacterRegistered = useSelector(
    (state) => state.character.isCharacterRegistered,
  );
  if (!isAuthorized) {
    return (
      <LoginScreen topData={<TopSectionRoutes />} bottomData={<LoginMenu />} />
    );
  }

  return (
    <Routes>
      <Route
        index
        path="/registrateCharacter"
        element={<RegisterCharacter />}
      />
      <Route index path="/main" element={<MainScreen />} />
      <Route
        path="/*"
        element={
          <Navigate
            to={isCharacterRegistered ? '/main' : '/registrateCharacter'}
            replace
          />
        }
      />
    </Routes>
  );
};
