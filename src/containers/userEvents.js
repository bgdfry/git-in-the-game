import { connect } from 'react-redux';
import { getEvents } from '../actions/index';

const getPullRequestByType = (events, prType) => {
  const pullReq = events.filter((ghEvent) => ghEvent.type==='PullRequestEvent');
  const listOfPullRequests = pullReq.filter((obj) => obj.payload.action===`${prType}`);
  return listOfPullRequests
}

const getIssueByType = (events, issueType) => {
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const listOfIssues = issues.filter((obj) => obj.payload.action===`${issueType}`);
  return listOfIssues
}

const getAllCommits = (events) => {
  const pushEvents = events.filter((ghEvent) => ghEvent.type==='PushEvent')
  const allCommits = pushEvents.map((obj) => obj.payload.commits.length);
  return allCommits
}


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
