import { connect } from 'react-redux';
import {
        getEvents,
        getIssuesCreated,
        getIssuesClosed,
        getCommits,
      } from '../actions/index';

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

const mapStateToProps = (state) => {
 const { events } = state
 return {
   events: events,
   pushEvents: events.filter((ghEvent) => ghEvent.type==='PushEvent'),
   pullRequests: events.filter((ghEvent) => ghEvent.type==='PullRequestEvent'),
   issues: events.filter((ghEvent) => ghEvent.type==='IssuesEvent'),
   openedPullRequests: getPullRequestByType(events, 'opened'),
   issuesCreated: getIssueByType(events, 'opened'),
   issuesClosed: getIssueByType(events, 'closed'),
   commits: state.commits,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   getEvents: (events) => {
      dispatch(getEvents(events));
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
