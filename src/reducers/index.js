import { combineReducers } from 'redux';
import auth from './auth';
import modStartDates, from './modStartDates';

export const reducers = combineReducers({
  auth,
  modStartDates
});
