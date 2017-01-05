import React from 'react';
import { connect } from 'react-redux';
import userSettings from '../containers/userSettings';
import { Link } from 'react-router';

class Settings extends React.Component {

  render() {
    let input
    return (
      <div className="main-container">
        <form onSubmit={ (e) => {
          e.preventDefault()
          this.props.submitUserName(input.value)
        }}>
          <input placeholder='Github username' ref={ node => {input = node} }/>
          <button children='Submit' />
        </form>
        <form className='mod-form'>
          <section className='mod-input'>
            <label>
              <h2>Mod 1</h2>
              <h4>Start Date:</h4>
            </label>
            <input
              type='date'
              onChange={(e) => this.props.setStartDate('MOD1', e.target.value)}
            />
          </section>
          <section className='mod-input'>
            <label>
              <h2>Mod 2</h2>
              <h4>Start Date:</h4>
            </label>
            <input
              type='date'
              onChange={(e) => this.props.setStartDate('MOD2', e.target.value)}
            />
          </section>
          <section className='mod-input'>
            <label>
              <h2>Mod 3</h2>
              <h4>Start Date:</h4>
            </label>
            <input
              type='date'
              onChange={(e) => this.props.setStartDate('MOD3', e.target.value)}
              />
          </section>
          <section className='mod-input'>
            <label>
              <h2>Mod 4</h2>
              <h4>Start Date:</h4>
            </label>
            <input
              type='date'
              onChange={(e) => this.props.setStartDate('MOD4', e.target.value)}
            />
          </section>
        </form>
        <Link to='/home'
          className='back back-right'>
          <img src='./imgs/right-arrow.svg' />
        </Link>
      </div>
    );
  }
};

export default userSettings(Settings);
