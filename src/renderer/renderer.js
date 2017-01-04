import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import rootReducer from './reducers/index'
import LoginPage from './components/login';

// import { syncHistoryWithStore } from 'react-router-redux';

// import configureStore from './store/configureStore';
// import getRoutes from './routes';

// Store
const configureStore = (initialState) => {

  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
};

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(hashHistory, store);

// ReactDOM.render(<App />, document.getElementById('app'));

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <LoginPage />
  </Provider>,
  document.getElementById('app')
);
