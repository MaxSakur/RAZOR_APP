import { Navigate, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Character from './../containers/character';
import DnD from '../containers/dnd';
import LoginScreen from './login';
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
      <Route index path="/character" element={<Character />} />
      <Route path="/dnd" element={<DnD />} />
      <Route path="/*" element={<Navigate to="/charactr" replace />} />
    </Routes>
  );
};
