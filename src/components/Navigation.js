import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {

  render() {
    const { forward, backward, route } = this.props;
    return (
      <Link
        to={route}
        className={ forward ? 'navigation forward-nav' : 'navigation backward-nav' }
        >
        <img src={ forward ? './imgs/right-arrow.svg' : './imgs/left-arrow.svg' } />
      </Link>
    );
  }
};

export default Navigation;
