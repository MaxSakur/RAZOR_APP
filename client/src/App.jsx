import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authorize } from './actions/userAuth';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen, MainScreen, LoginScreen } from './screens';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('user_token');
  useEffect(() => {
    token && dispatch(authorize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" exact element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
