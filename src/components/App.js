import React from 'react';
import userSettings from '../containers/userSettings';
import userEvents from '../containers/userEvents';

class App extends React.Component {
  constructor() {
    super();
}

fetchUserCommits(page = 0, user) {
  fetch(`https://api.github.com/users/${user}/events?page=${page}&callback`)
    .then(res => res.json())
    .then(response => this.props.getEvents(response))
    .then(page < 10 ? this.fetchUserCommits(page + 1, user) : null)
    .then(()=>this.props.getWeeklyCommitArrays(this.props.events))
    .catch(console.log('error'));
}

componentWillMount(){
  let user = JSON.parse(localStorage.getItem('username'));
  if (user){
    this.props.submitUserName(user);
    this.fetchUserCommits(0, user);
  };
  return;
}


render(){
  return(
      <div className='app'>
        { this.props.children }
      </div>
    );
  }
};

export default userEvents(
                  userSettings(App)
                );
