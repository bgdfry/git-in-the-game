import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import rootReducer from './reducers/index';
import Home from './components/Home';
import Settings from './components/Settings';
import App from './components/App';
import Dashboard from './components/Dashboard';

const store = createStore(rootReducer);
const { ipcRenderer } = require('electron');

ipcRenderer.on('retrievedGithubData', () => {
  console.log('hey');
});

let user = JSON.parse(localStorage.getItem('username'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        { user ? <IndexRoute component={Home} /> : <IndexRoute component={Settings} /> }
        <Route path='/login' component={Settings} />
        <Route path='/home' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
