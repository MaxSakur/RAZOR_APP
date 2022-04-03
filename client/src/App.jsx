import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authorize } from './actions/userAuth';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useRoutes } from './screens/routes';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('user_token');
  useEffect(() => {
    token && dispatch(authorize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Add theme provider
  // https://styled-components.com/docs/advanced

  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>{useRoutes(token)}</DndProvider>
    </BrowserRouter>
  );
}

export default App;
