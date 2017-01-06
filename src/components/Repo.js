import React from 'react';
import { Link } from 'react-router';
import userSettings from '../containers/userSettings';

class Repo extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <section className='main-container'>
        <Link to={'/repos'} className='back back-left'>
          <img src='./imgs/left-arrow.svg' />
        </Link>
        <section className='repo-container'>
          <section className='repo-info'>
            <section className='repo-title'>
              <h3>REPO:<h1>{this.props.params.name}</h1></h3>
            </section>
            <section className='repo-stars'>
              <h3>3</h3>
              <img src='./imgs/star.svg' />
            </section>
          </section>
        </section>
      </section>
    );
  }
};

export default userSettings(Repo);
