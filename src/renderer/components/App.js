import React from 'react';
import Home from './Home';
import Repos from './Repos';

export default class App extends React.Component {
  constructor() {
    super();
}


render(){
  return(
      <div className='app'>
        <Home />

      </div>
    );
  }
};
