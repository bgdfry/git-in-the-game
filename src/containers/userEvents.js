import { connect } from 'react-redux';
import {
        getEvents,
        getPushEvents,
        getOpenedPullRequests,
        getIssuesCreated,
        getIssuesClosed,
        getCommits,
      } from '../actions/index';

const mapStateToProps = (state) => {
 return {
   events: state.events,
   pushEvents: state.pushEvents,
   openedPullRequests: state.openedPullRequests,
   issuesCreated: state.issuesCreated,
   issuesClosed: state.issuesClosed,
   commits: state.commits,
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
    },
    getCommits: (commits) => {
      dispatch(getCommits(commits));
    }

 };
};

export default connect(mapStateToProps, mapDispatchToProps);
