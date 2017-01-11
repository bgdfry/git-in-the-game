import { combineReducers } from 'redux';
import username from './username';
import events from './event';
import weeklyCommits from './weeklyCommits';

export const rootReducer = combineReducers({
  username,
  events,
  weeklyCommits
});

export default rootReducer;
