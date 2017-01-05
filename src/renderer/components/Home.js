import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super();
}


render(){
  return(
      <div className='home-container'>
        <section className='home'>
          <section className='current-mod-stats'>
            <div className='current-mod-repos'>
              <h3>Mod 1 Repost:</h3>
              <h1>22</h1>
            </div>
            <div className='current-mod-commits'>
              <h3>Mod 1 Commits:</h3>
              <h1>134</h1>
            </div>
          </section>


          <div className='current-mod-comparison'>
            <h3>You VS Last Mod:</h3>
            <h1>+22</h1>
          </div>
          <div className='follower-count'>
            <h3>14</h3>
            <h4>Followers</h4>
          </div>
        </section>
        <section className='back'> ▷ </section>
      </div>
    );
  }
};
