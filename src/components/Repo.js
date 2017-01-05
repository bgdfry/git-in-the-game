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
        <section className='main'>
          <section className='repo-info'>
            <section>
              <h3>REPO:</h3> <h1>{this.props.params.name}</h1>
            </section>
            <section>
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
