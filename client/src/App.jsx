import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authorize } from './actions/userAuth';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/navbar';

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
      <div className="app">
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
