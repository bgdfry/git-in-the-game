import { connect } from 'react-redux';
import * from '../actions/index';

const mapStateToProps = (state) => {
 const { events } = state
 return {
   events: events,
   openedPullRequests: getPullRequestByType(events, 'opened'),
   issuesCreated: getIssueByType(events, 'opened'),
   issuesClosed: getIssueByType(events, 'closed'),
   allCommits: getAllCommits(events),
   reducedCommits: getAllCommits(events).reduce((a,b) => a + b, 0)
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   getEvents: (events) => {
      dispatch(getEvents(events));
    }
 };
};

export default connect(mapStateToProps, mapDispatchToProps);
