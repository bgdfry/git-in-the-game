import { connect } from 'react-redux';
import {
        getEvents,
        getPushEvents,
        getOpenedPullRequests,
        getIssuesCreated,
        getIssuesClosed
      } from '../actions/index';

const mapStateToProps = (state) => {
 return {
   events: state.events,
   pushEvents: state.pushEvents,
   openedPullRequests: state.openedPullRequests,
   issuesCreated: state.issuesCreated,
   issuesClosed: state.issuesClosed,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   getEvents: (events) => {
      dispatch(getEvents(events));
    },
    getPushEvents: (pushEvents) => {
      dispatch(getPushEvents(pushEvents));
    },
    getOpenedPullRequests: (openedPullRequests) => {
      dispatch(getOpenedPullRequests(openedPullRequests));
    },
    getIssuesCreated: (issuesCreated) => {
      dispatch(getIssuesCreated(issuesCreated));
    },
    getIssuesClosed: (issuesClosed) => {
      dispatch(getIssuesClosed(issuesClosed));
    }

 };
};

export default connect(mapStateToProps, mapDispatchToProps);
