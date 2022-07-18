import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorize } from './actions/userAuth';
// import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';
import { LogOutButton } from './components/common/styled_components';
import { logOutAC } from './store/reducers/userReducer';

function App({ history }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('user_token');
  const isLogged = useSelector((store) => store.user.isLogged);
  const onActionPress = () => {
    dispatch(logOutAC());
  };

  // TODO: Add theme provider
  // https://styled-components.com/docs/advanced

  return (
    <>
      <LogOutButton onClick={() => onActionPress()}>OUT</LogOutButton>
      <p>123</p>
    </>
    // <BrowserRouter>
    //   {/* TODO: Move DNDProvider inside screen where it really needed */}
    //   <DndProvider backend={HTML5Backend}>{useRoutes(isLogged)}</DndProvider>
    // </BrowserRouter>
  );
}

export default App;
