import React from 'react';
import { Link } from 'react-router';
import CircularProgressbar from 'react-circular-progressbar';
import userSettings from '../containers/userSettings';
import userEvents from '../containers/userEvents';
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
  fetch(`https://api.github.com/users/bcgodfrey91/events?page=0&callback`, {
    method: 'GET'
  })
  .then((res) => {return res.json(); })
  .then((response) => this.props.getEvents(response))
  .catch(() => { alert('Please try again.'); });
}

getPushEvent() {
  const { events } = this.state;
  const pushEv = events.filter((ghEvent) => ghEvent.type==='PushEvent');
  this.setState({ pushEvents: pushEv});
}

getOpenedPullRequests() {
  const { events } = this.state;
  const pullReq = events.filter((ghEvent) => ghEvent.type==='PullRequestEvent');
  const openedPullRequests = pullReq.filter((obj) => obj.payload.action==='opened');
  return openedPullRequests.length;
}

getIssuesCreated() {
  const { events } = this.state;
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const openedIssues = issues.filter((obj) => obj.payload.action==='opened');
  return openedIssues.length;
}

getIssuesClosed() {
  const { events } = this.state;
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const closedIssues = issues.filter((obj) => obj.payload.action==='closed');
  return closedIssues.length;
}

getCommits() {
  const { pushEvents } = this.state;
  const commitLengths = pushEvents.map((obj) => obj.payload.commits.length);
  const reducedCommits = commitLengths.reduce((a, b) => a + b, 0);
  return reducedCommits;
}

  render(){
    return(
      <div className='main-container'>
        <Navigation backward={true} route={'/'}/>
        <section className='main'>
        { this.props.username ? <h2>Hello {this.props.username}!</h2> : <h2>Please enter your github name on the previous screen</h2> }
          <section className='current-mod-stats'>
            <div className='stat'>
              <h3>Mod 1 Repost:</h3>
              <h1>22</h1>
            </div>
            <div className='stat'>
              <h3>Mod 1 Commits:</h3>
              <h1>134</h1>
            </div>
          </section>
          <div className='stat'>
            <h3>You VS Last Mod:</h3>
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
            onClick={() => console.log(this.props.events) }
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
