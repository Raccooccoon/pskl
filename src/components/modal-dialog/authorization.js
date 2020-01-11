/* eslint-disable class-methods-use-this, no-undef */
export default class Authorize {
  googleSignIn() {
    const signInButton = document.querySelector('.sign_in-btn');

    function app(user) {
      const arr = user.displayName.split(' ');
      signInButton.textContent = `Hello, ${arr[0]}`;
      signInButton.style.width = 'fit-content';
    }

    function newLoginHappened(user) {
      if (user) {
        app(user);
      } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);
  }
}
