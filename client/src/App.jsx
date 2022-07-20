import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';
import { LogOutButton } from './components/common/styled_components';
import { autorizeAC, logOutAC } from './store/reducers/userReducer';
import LoginScreenContainer from './containers/loginScreenContainer';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('user_token');
  const isLogged = useSelector((store) => store.user.isLogged);

  useEffect(() => {
    token && dispatch(autorizeAC());
    // We dont need to add dispatch as deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const onActionPress = () => {
    dispatch(logOutAC());
  };

  return (
    <>
      {isLogged ? (
        <Routes>
          <Route
            path="*"
            index
            element={<p style={{ color: 'red' }}>Yoooo</p>}
          />
          <Route
            path="/main"
            exact
            element={<p style={{ color: 'red' }}>MAIN</p>}
          />
        </Routes>
      ) : (
        <Routes>
          <Route index path="*" element={<LoginScreenContainer />} />
        </Routes>
      )}
      <LogOutButton onClick={() => onActionPress()}>OUT</LogOutButton>
    </>
    // <BrowserRouter>
    //   {/* TODO: Move DNDProvider inside screen where it really needed */}
    //   <DndProvider backend={HTML5Backend}>{useRoutes(isLogged)}</DndProvider>
    // </BrowserRouter>
  );
}

export default App;
