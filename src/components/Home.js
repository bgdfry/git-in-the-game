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

sumArray(array){
  return array.reduce((a,b) => a + b);
}

commitPercentage(currentWeekCommits, previousWeekCommits) {
  const current = this.sumArray(currentWeekCommits);
  const previous = this.sumArray(previousWeekCommits);
  const decimal = current / previous;
  const arr = decimal.toString().split('.');
  const length = 2;
  if(arr.length === 1){ return 100 }
  if(arr[1].length < 2){ length = arr[1].length - 1 }
  if(arr[0] < 1){ return parseInt(arr[1].substring(0, length)) }
  else { return parseInt(arr[0].concat(arr[1].substring(0, length)))}
}

  render(){
    const currentWeekCommits = [10,14,3,4,1,2,5];
    const previousWeekCommits = [14,21,2,3,5,2,1];
    const previousWeekPrs = [0,0,2,3,1,0,0];
    return(
      <div className='main-container'>
        <Navigation backward={true} route={'/'} />
        <section className='main'>
        { this.props.username ? <h2>Hello {this.props.username}!</h2> : <h2>Please enter your github name on the previous screen</h2> }
          <section className='current-mod-stats'>
            <div className='stat'>
              <h3>Last Week Commits:</h3>
              <h1>{this.sumArray(currentWeekCommits)}</h1>
            </div>
            <div className='stat'>
              <h3>Last Week PR's:</h3>
              <h1>{this.sumArray(previousWeekPrs)}</h1>
            </div>
          </section>
          <div className='stat'>
            <h3>Commits VS Last Week:</h3>
            <CircularProgressbar
              percentage={this.commitPercentage(currentWeekCommits, previousWeekCommits)}
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
            onClick={() => console.log(this.commitPercentage())}
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
