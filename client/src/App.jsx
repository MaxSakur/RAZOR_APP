import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authorize } from './actions/userAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth';
import NavBar from './components/navbar';
import MainScreen from './screens/main';
import HomeScreen from './screens/home';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('user_token');
  useEffect(() => {
    console.log('user_token', Boolean(token));
    token && dispatch(authorize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/main" element={<MainScreen />} />
        </Routes>

        <Login />
      </div>
    </Router>
  );
}

export default App;
