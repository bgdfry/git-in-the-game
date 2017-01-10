import React from 'react';
import userSettings from '../containers/userSettings'

class App extends React.Component {
  constructor() {
    super();
}

checkForUser() {
  let user = JSON.parse(localStorage.getItem('username'));
  if (user){
    this.props.submitUserName(user);
  }
}

componentWillMount(){
  this.checkForUser();
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
