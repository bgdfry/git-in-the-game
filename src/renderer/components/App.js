import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
}


render(){
  return(
      <div>
        <h1>Connected</h1>
        <div>
          <h3>Mod 1 Repos:</h3>
          <h2>22</h2>
        </div>
        <div>
          <h3>Mod 1 Commits:</h3>
          <h2>134</h2>
        </div>
        <div>
          <h3>You VS Last Mod:</h3>
          <h2>+22</h2>
        </div>
        <div>
          <h4>14</h4>
          <h4>Followers</h4>
        </div>
      </div>
    );
  }
};
