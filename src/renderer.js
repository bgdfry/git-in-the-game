import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import rootReducer from './reducers/index';
import Home from './components/Home';
import Settings from './components/Settings';
import App from './components/App';
import Repos from './components/Repos';
import Repo from './components/Repo';

const store = createStore(rootReducer);
const { ipcRenderer } = require('electron');

ipcRenderer.on('retrievedGithubData', () => {
  console.log('hey');
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        {/* if we have a name in storage */}
        <IndexRoute component={Settings} />
        {/* else show */}
        <Route path='/home' component={Home} />
        <Route path='/repos' component={Repos} />
        <Route path='/repos/:name' component={Repo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
