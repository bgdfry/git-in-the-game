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
    let size = 2;
    if(arr.length === 1){ return 100; }
    if(arr[1].length < 2){ size = arr[1].length - 1; }
    if(arr[0] < 1){ return parseInt(arr[1].substring(0, size)); }
    else { return parseInt(arr[0].concat(arr[1].substring(0, size)));}
  }

  componentWillMount(){
    if (this.props.username===''){
      this.props.router.push('/login');
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.username===''){
      this.props.router.push('/login');
    }
  }

  render(){
    let currentWeekCommits;
      this.props.weeklyCommits.thisWeeksCommits ?  currentWeekCommits = this.props.weeklyCommits.thisWeeksCommits : currentWeekCommits = [10,14,3,4,1,2,5];
    let previousWeekCommits;
      this.props.weeklyCommits.lastWeeksCommits ?  previousWeekCommits = this.props.weeklyCommits.lastWeeksCommits : previousWeekCommits = [14,21,2,3,5,2,1];
    let previousWeekPrs = [0,0,2,3,1,0,0];
    return(
      <section className='main-container'>
        <section className='main'>
        { this.props.username ? <h2>Hello {this.props.username}!</h2> : <h2>Please enter your github name on the previous screen</h2> }
          <section className='current-mod-stats'>
            <section className='stat'>
              <h3>Last Week Commits:</h3>
              <h1>{this.sumArray(currentWeekCommits)}</h1>
            </section>
            <section className='stat'>
              <h3>Last Week PR's:</h3>
              <h1>{this.sumArray(previousWeekPrs)}</h1>
            </section>
          </section>
          <section className='stat'>
            <h3>Commits VS Last Week:</h3>
            <CircularProgressbar
              percentage={this.commitPercentage(currentWeekCommits, previousWeekCommits)}
              strokeWidth={20}
              initialAnimation={true}
              classForPercentage={(pct) => pct < 100 ? 'incomplete' : 'complete'}/>
          </section>
          <section className='follower-count'>
            <button className='logout' onClick={() => this.props.submitUserName('')}>Log out</button>
            <h3>14</h3>
            <h4>Followers</h4>
          </section>
        </section>
        <Navigation forward={true} route={'/dashboard'}/>
      </section>
    );
  }
};

export default userEvents(userSettings(Home));
