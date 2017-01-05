import React from 'react';
import { Link } from 'react-router';

export default class Repos extends React.Component {
  constructor() {
    super();
    this.state = {
      repositiories: [
        { name: 'fish-wrangler', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'colorado-weather', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'jacked', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'social-influence', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'}
      ]
    };
  }

  renderRepoNames() {
    this.state.repositiories ?
    this.state.repositiories.map((repo) => {
      return <a href={repo.link}><h3>{repo.name}</h3></a>
    })
    :
    <h2>No Repos</h2>
  }

  render(){
    return(
      <section className='home-container'>
        <Link to='/' className='back back-left'>
          <img src='./imgs/left-arrow.svg' />
        </Link>

        <section className='home'>
          <section className='current-mod-stats'>
            <section className='stat'>
              <h1>All Repos</h1>
              {this.renderRepoNames()}
            </section>
            <form className='mod-form'>
              <section className='mod-input'>
                <label>
                  <h2>Mod 1</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
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
        <Link to='/username-input'
          className='back back-right'>
        <img src='./imgs/right-arrow.svg' />
        </Link>
      </section>
    );
  }
};
