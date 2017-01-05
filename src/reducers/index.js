import { combineReducers } from 'redux';
import username from './username';
import modStartDates from './modStartDates';

export const rootReducer = combineReducers({
  modStartDates,
  username
});

export default rootReducer;
