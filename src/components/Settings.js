import React from 'react';
import { connect } from 'react-redux';
import userSettings from '../containers/userSettings';
import { Link, browserHistory } from 'react-router';
import Navigation from './Navigation';

const { remote } = require('electron');
const mainProcess = remote.require('../../../main');

class Settings extends React.Component {

  render() {
    console.log(this.props);
    let input;
    return (
      <section className="main-container">
        <section className='main'>
          <form className='mod-form'
                onSubmit={ (e) => {
                e.preventDefault()
                this.props.submitUserName(input.value)
                mainProcess.saveUsername({ username: input.value })
                }}>
            <section className='mod-input'>
              <label>
                <h2>Github Username</h2>
              </label>
              <input placeholder='Github username' ref={ node => {input = node} } />
              <button children='Submit' />
            </section>
          </form>
          </section>
        {this.props.username ?
          this.props.router.push('/home')
          :
          null}
      </section>
    );
  }
};

export default userSettings(Settings);
