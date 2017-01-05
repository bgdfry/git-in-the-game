import React from 'react';
import { Link } from 'react-router';
import userSettings from '../containers/userSettings';

class NameInput extends React.Component {

render(){
  let input;
  return(
      <div className='home-container'>
      <Link to={'/repos'} className='back back-left'>
        <img src='./imgs/left-arrow.svg' />
      </Link>
        <section className='home'>
          <form onSubmit={ (e) => {
            e.preventDefault()
            this.props.submitUserName(input.value)
          }}>
            <input placeholder='Github username' ref={ node => {input = node} }/>
            <button children='Submit' />
          </form>
        </section>
      </div>
    );
  };
};

export default userSettings(NameInput);
