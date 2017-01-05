import React from 'react';

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
