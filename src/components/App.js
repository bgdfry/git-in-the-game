import React from 'react';
import userSettings from '../containers/userSettings'

class App extends React.Component {
  constructor() {
    super();
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
