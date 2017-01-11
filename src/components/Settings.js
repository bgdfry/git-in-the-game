import React from 'react';
import { connect } from 'react-redux';
import userSettings from '../containers/userSettings';
import { Link, browserHistory } from 'react-router';
import Navigation from './Navigation';

class Settings extends React.Component {
  constructor(){
    super();
    this.state = {
      fieldValue: ''
    };
  }

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
            <section aria-labelledby='input-label'>
              <h2 className='input-label'>Please enter your Github username to Proceed:</h2>
              <input
                placeholder='Github username'
                ref={ node => {input = node} }
                onKeyUp={(e)=> this.setState({fieldValue: e.target.value})
              }/>
              <button className='submit-button' children='Submit' disabled={!this.state.fieldValue} />
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
