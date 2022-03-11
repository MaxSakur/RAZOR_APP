import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './reducers';
import { Provider } from 'react-redux';
import './utils/i18next.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
