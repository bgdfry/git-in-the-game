import React from 'react';
import { Link } from 'react-router';

const NameInput = ({ submitUserName }) => {
let input;
return(
    <div className='home-container'>
    <Link to={'/repos'} className='back back-left'>
      <img src='./imgs/left-arrow.svg' />
    </Link>
      <section className='home'>
        <form onSubmit={ (e) => {
          e.preventDefault()
          submitUserName(input.value)
        }}>
          <input placeholder='Github isername' ref={ node => {input = node} }/>
          <button children='Submit' />
        </form>
      </section>
    </div>
  );
};

export default NameInput;
