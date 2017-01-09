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
  .then((response) => this.props.getEvents(response))
  .catch(() => { alert('Please try again.'); });
}

  render(){
    return(
      <div className='main-container'>
          <Navigation backward={true} route={'/'} />
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
              onClick={ (e) => {
              e.preventDefault()
              this.props.submitUserName(null)
              mainProcess.saveUsername({ username: null })
            }}
            >Logout</button>
            <button
            onClick={() => console.log(this.props.issuesCreated) }
            >log</button>
            <button
            onClick={() => console.log(this.props.reducedCommits) }
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
