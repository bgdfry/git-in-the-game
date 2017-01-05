import React from 'react';
import { Link } from 'react-router';

export default class NameInput extends React.Component {
  constructor() {
    super();
}

submitUserName() {

}

render(){
  return(
      <div className='home-container'>
      <Link to={'/repos'} className='back back-left'>
        <img src='./imgs/left-arrow.svg' />
      </Link>
        <section className='home'>
          <input type='text' placeholder='Input GitHub username' value={this.props.value}></input>
          <button type='submit' onClick={this.submitUserName()}>Submit</button>
        </section>
      </div>
    );
  }
};
