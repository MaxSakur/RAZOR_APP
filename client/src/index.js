import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import getStore, { history } from './store';
import './utils/i18next.js';

import App from './App';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
