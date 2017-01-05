import React from 'react';
import { Link } from 'react-router';

export default class Repos extends React.Component {
  constructor() {
    super();
    this.state = {
      mod1start: '',
      mod2start: '',
      mod3start: '',
      mod4start: ''
    }
}

updateStartDate(e, mod){
  this.setState({ [mod]: e.target.value });
}

render(){
  return(
      <section className='home-container'>
        <Link to={'/'} className='back back-left'>
          <img src='./imgs/left-arrow.svg' />
        </Link>

        <section className='home'>
          <section className='current-mod-stats'>
            <section className='stat'>

            </section>
            <form className='mod-form'>
              <section className='mod-input'>
                <label>
                  <h2>Mod 1</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' onChange={(e)=>this.updateStartDate(e, 'mod1start')}/>
              </section>
              <section className='mod-input'>
                <label>
                  <h2>Mod 2</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
              </section>
              <section className='mod-input'>
                <label>
                  <h2>Mod 3</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
              </section>
              <section className='mod-input'>
                <label>
                  <h2>Mod 4</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
              </section>
            </form>
          </section>
        </section>
      </section>
    );
  }
};
