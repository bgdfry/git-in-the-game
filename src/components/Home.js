import React from 'react';
import { Link } from 'react-router';
import CircularProgressbar from 'react-circular-progressbar';
import userSettings from '../containers/userSettings';
import userEvents from '../containers/userEvents';
import userPushEvents from '../containers/userEvents';
import Navigation from './Navigation';
import helpers from './helpers';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      pushEvents: null,
    };
}

goToRepos() {
  this.context.router.push('/repos');
}

grabUserInfo() {
  const user = this.props.username;
  fetch(`https://api.github.com/users/${user}/events?page=0&callback`, {
    method: 'GET'
  })
  .then((res) => {return res.json(); })
  .then((response) => this.loadData(response))
  .catch(() => { alert('Please try again.'); });
}

loadData(events) {
   this.props.getEvents(events);
   this.getPushEvents(events);
   this.getOpenedPullRequests(events);
   this.getIssuesCreated(events);
   this.getIssuesClosed(events);
   this.getCommits(events);
}

getPushEvents(events) {
  const pushEv = events.filter((ghEvent) => ghEvent.type==='PushEvent');
  this.props.getPushEvents(pushEv);
}

getOpenedPullRequests(events) {
  const pullReq = events.filter((ghEvent) => ghEvent.type==='PullRequestEvent');
  const openedPullRequests = pullReq.filter((obj) => obj.payload.action==='opened');
  this.props.getOpenedPullRequests(openedPullRequests);
}

getIssuesCreated(events) {
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const openedIssues = issues.filter((obj) => obj.payload.action==='opened');
  this.props.getIssuesCreated(openedIssues);
}

getIssuesClosed(events) {
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const closedIssues = issues.filter((obj) => obj.payload.action==='closed');
  this.props.getIssuesClosed(closedIssues);
}

getCommits() {
  const { pushEvents } = this.props;
  const commitLengths = pushEvents.map((obj) => obj.payload.commits.length);
  const reducedCommits = commitLengths.reduce((a, b) => a + b, 0);
  this.props.getCommits(reducedCommits);
}

  render(){
    return(
      <div className='main-container'>
        <Navigation backward={true} route={'/'}/>
        <section className='main'>
        { this.props.username ? <h2>Hello {this.props.username}!</h2> : <h2>Please enter your github name on the previous screen</h2> }
          <section className='current-mod-stats'>
            <div className='stat'>
              <h3>Last Week Commits:</h3>
              <h1>22</h1>
            </div>
            <div className='stat'>
              <h3>Last Week PR's:</h3>
              <h1>134</h1>
            </div>
          </section>
          <div className='stat'>
            <h3>Commits VS Last Week:</h3>
            <CircularProgressbar
              percentage={60}
              strokeWidth={20} />
          </div>
          <div className='follower-count'>
            <h3>14</h3>
            <h4>Followers</h4>
            <button
            onClick={() => this.grabUserInfo()}
            >fetch</button>
            <button
            onClick={() => console.log(this.props) }
            >log</button>
            <button
            onClick={() => this.getIssuesClosed() }
            >commits</button>
          </div>
        </section>
        <Navigation forward={true} route={'/repos'}/>
      </div>
    );
  }
};

export default userEvents(
                  userSettings(Home)
              );
