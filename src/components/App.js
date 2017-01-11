import React from 'react';
import userSettings from '../containers/userSettings'

class App extends React.Component {
  constructor() {
    super();
}

fetchUserCommits(page = 0, user = this.props.username) {
  fetch(`https://api.github.com/users/${user}/events?page=${page}&callback`)
    .then(res => res.json())
    .then(response => this.props.getEvents(response))
    .then(page < 10 ? this.grabUserInfo(page + 1, user) : null)
    .then(() => this.getPushEvent())
    .catch(() => alert('Please try again.'));
}

getPushEvent() {
-  const { events } = this.state;
+  const { events } = this.props;
  const pushEv = events.filter((ghEvent) => ghEvent.type==='PushEvent');
  this.props.setPush
}

componentWillMount(){
  let user = JSON.parse(localStorage.getItem('username'));
  if (user){ this.props.submitUserName(user) };
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

export default userSettings(App);
