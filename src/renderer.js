import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import modStartDates from './reducers/modStartDates';
import rootReducer from './reducers/index';
import Home from './components/Home';
import Settings from './components/Settings';
import NameInput from './components/NameInput';
import App from './components/App';
import Repos from './components/Repos';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Settings} />
        <Route path='/home' component={Home} />
        <Route path='/repos' component={Repos} />
        <Route path='/username-input' component={NameInput} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
