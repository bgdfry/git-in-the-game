import React from 'react';

export default class NameInput extends React.Component {
  constructor() {
    super();
}

render(){
  return(
      <div className='home-container'>
        <section className='home'>
          <input type='text' placeholder='Input GitHub username here'></input>
          <button type='submit'>Submit</button>
        </section>
      </div>
    );
  }
};
