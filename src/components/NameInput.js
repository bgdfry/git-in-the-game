import React from 'react';
import { Link } from 'react-router';

const NameInput = ({submitUserName}) => {
return(
    <div className='home-container'>
    <Link to={'/repos'} className='back back-left'>
      <img src='./imgs/left-arrow.svg' />
    </Link>
      <section className='home'>
        <input type='text' placeholder='Input GitHub username' value=''></input>
        <button type='submit' onClick={submitUserName(input.value)}>Submit</button>
      </section>
    </div>
  );
};
