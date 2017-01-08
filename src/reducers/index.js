import { combineReducers } from 'redux';
import username from './username';
import events from './event';
import pushEvents from './pushEvents';
import openedPullRequests from './openedPullRequests';

export const rootReducer = combineReducers({
  username,
  events,
  pushEvents,
  openedPullRequests,
});

export default rootReducer;
