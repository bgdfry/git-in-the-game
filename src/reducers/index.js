import { combineReducers } from 'redux';
import username from './username';
import events from './event';
import currentWeekCommits from './weeklyCommits';

export const rootReducer = combineReducers({
  username,
  events,
  currentWeekCommits
});

export default rootReducer;
