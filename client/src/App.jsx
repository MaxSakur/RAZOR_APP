import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { autorizeAC } from './store/reducers/userReducer';
import LoginScreenContainer from './containers/loginScreenContainer';
import Game from './containers/gameContainer';
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
          <Route path="*" index element={<Game />} />
          <Route
            path="/welcome"
            element={<p style={{ color: 'red' }}>WELCOME</p>}
          />
          <Route
            path="/character"
            element={<p style={{ color: 'red' }}>MAIN</p>}
          />
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
