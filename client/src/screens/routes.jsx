import { Navigate, Route, Routes } from 'react-router-dom';
import LoginScreen from './login';
import MainScreen from './main';
import { LoginMenu } from './login/loginMenu/LoginMenu';
import { TopSectionRoutes } from './login/loginRoutes';

export const useRoutes = (isAuthorized) => {
  if (!isAuthorized) {
    return (
      <LoginScreen topData={<TopSectionRoutes />} bottomData={<LoginMenu />} />
    );
  }

  return (
    <Routes>
      <Route index path="/main" element={<MainScreen />} />
      <Route path="/*" element={<Navigate to="/main" replace />} />
    </Routes>
  );
};
