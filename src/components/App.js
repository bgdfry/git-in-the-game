import React from 'react';
import userSettings from '../containers/userSettings';
import userEvents from '../containers/userEvents';

class App extends React.Component {
  constructor() {
    super();
}

fetchUserCommits(page) {
  fetch(`https://api.github.com/users/kylem038/events?page=${page}&callback`)
    .then(res => res.json())
    .then(response => this.props.getEvents(response))
    .then(page < 10 ? this.fetchUserCommits(page + 1) : null)
    .then(() => this.props.getWeeklyCommitArrays(this.props.events))
    .catch(() => alert('Please try again.'));
}

componentWillMount(){
  let user = JSON.parse(localStorage.getItem('username'));
  if (user){
    this.props.submitUserName(user);
    this.fetchUserCommits(0);
  }
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
