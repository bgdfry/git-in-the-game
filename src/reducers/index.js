import { combineReducers } from 'redux';
import auth from './auth';
import modStartDates from './modStartDates';

export const rootReducer = combineReducers({
  auth,
  modStartDates
});

export default rootReducer;
