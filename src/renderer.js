import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import auth from './reducers/auth';
import reducers from './reducers/index';
import Home from './components/Home';
import Login from './components/Login';
import NameInput from './components/NameInput';

const store = createStore(auth);

ReactDOM.render(
  <Provider store={store}>
    <NameInput />
  </Provider>,
  document.getElementById('app')
);
