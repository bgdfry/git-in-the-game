const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyBzUxhEwqCHMudqnYZGCm9jPD3kReiFuog",
  authDomain: "git-in-the-game.firebaseapp.com",
  databaseURL: "https://git-in-the-game.firebaseio.com",
  storageBucket: "git-in-the-game.appspot.com",
  messagingSenderId: "526478493098"
};

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GithubAuthProvider();
