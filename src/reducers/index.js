import { combineReducers } from 'redux';
import username from './username';
import events from './event';

export const rootReducer = combineReducers({
  username,
  events
});

export default rootReducer;
