import React from 'react';
import SignIn from './SignIn';

export default class App extends React.Component {
  constructor() {
    super();
}


render(){
  return(
      <div>
        <SignIn />
      </div>
    );
  }

};
