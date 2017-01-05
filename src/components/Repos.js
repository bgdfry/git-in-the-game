import React from 'react';
import { Link } from 'react-router';
import userSettings from '../containers/userSettings';

class Repos extends React.Component {
  constructor() {
    super();
    this.state = {

      repositiories: [
        { name: 'fish-wrangler', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'colorado-weather', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'jacked', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'social-influence', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'fish-wrangler', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'colorado-weather', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'jacked', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
        { name: 'social-influence', link: 'https://www.youtube.com/watch?v=xfr64zoBTAQ'},
      ]
    }
  }

  renderRepoNames() {
    return (
      this.state.repositiories ? 
      this.state.repositiories.map((repo, i) => {
        return <li><a href={repo.link} key={i}><h3>{repo.name}</h3></a></li>
      })
      :
      <h2>No Repos</h2>
    )
  }

  render(){
    return(
      <section className='main-container'>
        <Link to={'/'} className='back back-left'>
          <img src='./imgs/left-arrow.svg' />
        </Link>

        <section className='main'>
          <section className='current-mod-stats'>
            <section className='all-repos'>
              <h1>All Repos</h1>
              <ul>
                {this.renderRepoNames()}
              </ul>
            </section>
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
          </section>
        </section>
      </section>
    );
  }
};

export default userSettings(Repos);
