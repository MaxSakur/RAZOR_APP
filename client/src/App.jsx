import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorize } from './actions/userAuth';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useRoutes } from './screens/routes';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('user_token');
  const isLogged = useSelector((store) => store.user.isLogged);
  useEffect(() => {
    token && dispatch(authorize());
    console.log(isLogged, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Add theme provider
  // https://styled-components.com/docs/advanced

  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>{useRoutes(isLogged)}</DndProvider>
    </BrowserRouter>
  );
}

export default App;
