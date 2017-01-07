import React from 'react';
import { connect } from 'react-redux';
import userSettings from '../containers/userSettings';
import { Link } from 'react-router';
import Navigation from './Navigation';

const { ipcRenderer, remote } = require('electron');
const mainProcess = remote.require('./main');

class Settings extends React.Component {

  render() {
    let input;
    return (
      <section className="main-container">
        <section className='main'>
          <form className='mod-form'
                onSubmit={ (e) => {
                e.preventDefault()
                this.props.submitUserName(input.value)
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
        <Navigation forward={true} route={'/home'}/>
      </section>
    );
  }
};

export default userSettings(Settings);
