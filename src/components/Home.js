import React from 'react';
import { Link } from 'react-router';
import CircularProgressbar from 'react-circular-progressbar';
import userSettings from '../containers/userSettings';
import userEvents from '../containers/userEvents';
import Navigation from './Navigation';
import helpers from './helpers';
import moment from 'moment';


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


getThisWeeksEvents(arr) {
  arr.filter(e => {
    return  moment.utc(e.created_at).year() == moment.utc(new Date()).year() &&
            moment.utc(e.created_at).isoWeek() == moment.utc(new Date()).isoWeek();
  });
}

grabUserInfo(page = 0, user = this.props.username) {
  fetch(`https://api.github.com/users/${user}/events?page=${page}&callback`)
    .then(res => res.json())
    .then(response => this.props.getEvents(response))
    .then(page < 10 ? this.grabUserInfo(page + 1, user) : null)
    .then(() => this.getPushEvent())
    .then(() => this.getCommits())
    .catch(() => alert('Please try again.'));
}

getPushEvent() {
  const { events } = this.props;
  const pushEv = events.filter((ghEvent) => ghEvent.type==='PushEvent');
  this.setState({ pushEvents: pushEv});
}

getOpenedPullRequests() {
  const { events } = this.props;
  const pullReq = events.filter((ghEvent) => ghEvent.type==='PullRequestEvent');
  const openedPullRequests = pullReq.filter((obj) => obj.payload.action==='opened');
  return openedPullRequests.length;
}

getIssuesCreated() {
  const { events } = this.props;
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const openedIssues = issues.filter((obj) => obj.payload.action==='opened');
  return openedIssues.length;
}

getIssuesClosed() {
  const { events } = this.props;
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const closedIssues = issues.filter((obj) => obj.payload.action==='closed');
  return closedIssues.length;
}

getCommits() {
  this.getPushEvent();
  const { pushEvents } = this.state;
  const commitLengths = pushEvents.map((obj) => obj.payload.commits.length);
  const reducedCommits = commitLengths.reduce((a, b) => a + b, 0);
  console.log(reducedCommits);
}

// sortCommitsByDay(pushEvents) {
//   let arr = [0,0,0,0,0,0,0];
//   pushEvents.map(e => {
//     if(e.payload.commits){
//         arr[moment(e.created_at).isoWeekday() - 1] += e.payload.commits.length;
//         return arr;
//     } else {
//       return
//     }
//   });
//   return arr
// }

sortCommitsByDay(pushEvents) {
  let arr = [0,0,0,0,0,0,0];
  pushEvents.map(e => {
    return e.payload.commits ?
      arr[moment(e.created_at).isoWeekday() - 1] += e.payload.commits.length : null
  });
  return arr
}

componentDidMount(){
  console.log(
    this.sortCommitsByDay(helpers)
  );
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
            onClick={() => this.getCommits() }
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
