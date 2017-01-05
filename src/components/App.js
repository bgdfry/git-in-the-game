import React from 'react';
import Home from './Home';
import Repos from './Repos';
import NameInput from './NameInput';

export default class App extends React.Component {
  constructor() {
    super();
}

render(){
  return(
      <div className='app'>
        { this.props.children }
      </div>
    );
  }
};
