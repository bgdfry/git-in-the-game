import React from 'react';
import { Link } from 'react-router';
import CircularProgressbar from 'react-circular-progressbar';


export default class Home extends React.Component {
  constructor() {
    super();
}

goToRepos() {
  this.context.router.push('/repos');
}


render(){
  return(
      <div className='home-container'>
        <section className='home'>
          <section className='current-mod-stats'>
            <div className='stat'>
              <h3>Mod 1 Repost:</h3>
              <h1>22</h1>
            </div>
            <div className='stat'>
              <h3>Mod 1 Commits:</h3>
              <h1>134</h1>
            </div>
          </section>


          <div className='stat'>
            <h3>You VS Last Mod:</h3>
            <CircularProgressbar
              percentage={60}
              strokeWidth={20} />
          </div>
          <div className='follower-count'>
            <h3>14</h3>
            <h4>Followers</h4>
          </div>
        </section>
        <Link to='/repos'
          className='back back-right'>
          <img src='./imgs/right-arrow.svg' />
        </Link>
      </div>
    );
  }
};
