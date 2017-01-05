import React from 'react';
import Home from './Home';

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
