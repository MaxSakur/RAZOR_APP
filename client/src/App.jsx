import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { autorizeAC } from './store/reducers/userReducer';
import LoginScreenContainer from './containers/loginScreenContainer';
import Lobby from './containers/lobbyContainer';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('user_token') || '';
  const isLogged = useSelector((store) => store.user.isLogged);

  useEffect(() => {
    token && dispatch(autorizeAC());
    // We dont need to add dispatch as deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      {isLogged ? (
        <Routes>
          <Route path="*" index element={<Lobby />} />
        </Routes>
      ) : (
        <Routes>
          <Route index path="*" element={<LoginScreenContainer />} />
        </Routes>
      )}
    </>
    // <BrowserRouter>
    //   {/* TODO: Move DNDProvider inside screen where it really needed */}
    //   <DndProvider backend={HTML5Backend}>{useRoutes(isLogged)}</DndProvider>
    // </BrowserRouter>
  );
}

export default App;
