import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import getStore, { history } from './store';
import './utils/i18next.js';

import App from './App';
import LoginContainer from './containers/loginContainer';

const store = getStore();
const token = localStorage.getItem('user_token');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {token ? (
        <Routes>
          <Route path="" exact element={<App />} />
          {/* <Route index path="/" element={<WelcomeScreen />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route index path="/" element={<LoginContainer />} />

          {/* WRONG LINK */}
          <Route path="*" element={<LoginContainer />} />
        </Routes>
      )}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
