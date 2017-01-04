import React from 'react';
import AuthService from '../../utils/AuthService';

const auth = new AuthService('Rr72oknlvqmkiLJLfczB6nqrFUZNzvPa', 'kylemisencik.auth0.com');

export default function() {
  return (
    <section className="SignIn">
      <h1>Git in the Game</h1>
      <button
        className="loginButton"
        onClick={auth.login.bind(this)}
      >
        Sign In
      </button>
    </section>
  )
}
