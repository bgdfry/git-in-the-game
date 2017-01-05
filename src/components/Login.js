import React from 'react';
import { connect } from 'react-redux';

import auth from '../containers/auth'

class Login extends React.Component {

  logIn(){
    this.props.login();
    console.log(this.props)
  }

  render() {
    return (
      <div className="login-container">
        <h1>Login Screen!</h1>
        <button className="login-button" onClick={()=> this.logIn()}>
          Log in to GitHub
        </button>
        { this.props.auth ? <span>Logged in!</span> : null }
      </div>
    );
  }
};

export default auth(Login);
