import { combineReducers } from 'redux';
import username from './username';
import modStartDates from './modStartDates';
import events from './event';


export const rootReducer = combineReducers({
  modStartDates,
  username,
  events
});

export default rootReducer;
