import React from 'react';
import Navigation from './Navigation';
import userSettings from '../containers/userSettings';

class Repo extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <section className='main-container'>
        <Navigation backward={true} route={'/repos'}/>
        <section className='repo-container'>
          <section className='repo-info'>
            <section className='repo-title'>
              <h1>REPO:{this.props.params.name}</h1>
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
