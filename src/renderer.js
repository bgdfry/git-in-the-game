import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import auth from './reducers/auth';
import reducers from './reducers/index';
import Home from './components/Home';
import Login from './components/Login';

const store = createStore(auth);

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('app')
);
