import { combineReducers } from 'redux';
import username from './username';
import events from './event';
import pushEvents from './pushEvents';
import openedPullRequests from './openedPullRequests';
import issuesCreated from './issuesCreated';

export const rootReducer = combineReducers({
  username,
  events,
  pushEvents,
  openedPullRequests,
  issuesCreated,
});

export default rootReducer;
