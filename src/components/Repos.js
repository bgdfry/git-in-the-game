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
    return (
      this.state.repositiories ?
      this.state.repositiories.map((repo) => {
        return <a key={Math.random()} href={repo.link}><h3>{repo.name}</h3></a>
      })
      :
      <h2>No Repos</h2>
    )
  }

  render(){
    return(
      <section className='home-container'>
        <Link to={'/home'} className='back back-left'>
          <img src='./imgs/left-arrow.svg' />
        </Link>

        <section className='home'>
          <section className='current-mod-stats'>
            <section className='stat'>
              <h1>All Repos</h1>
              {this.renderRepoNames()}
            </section>

          </section>
        </section>
      </section>
    );
  }
};
