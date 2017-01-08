import { combineReducers } from 'redux';
import username from './username';
import events from './event';
import pushEvents from './pushEvents';

export const rootReducer = combineReducers({
  username,
  events,
  pushEvents
});

export default rootReducer;
