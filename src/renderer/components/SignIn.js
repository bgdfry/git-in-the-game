import React from 'react';

export default function() {
  return (
    <section className="SignIn">
      <h1>Git in the Game</h1>
      <button
        className="loginButton"
        onClick={() => firebase.auth().signInWithPopup(provider)}
      >
        Sign In
      </button>
    </section>
  )
}
