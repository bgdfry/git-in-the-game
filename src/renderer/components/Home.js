import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super();
}


render(){
  return(
      <div className='home'>
        <div>
          <h2>Mod 1 Repost:</h2>
          <h1>22</h1>
        </div>
        <div>
          <h2>Mod 1 Commits:</h2>
          <h1>134</h1>
        </div>
        <div>
          <h2>You VS Last Mod:</h2>
          <h1>+22</h1>
        </div>
        <div>
          <h2>14</h2>
          <h4>Followers</h4>
        </div>
      </div>
    );
  }
};
