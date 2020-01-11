import Authorize from './authorization';

const signInButton = document.querySelector('.sign_in-btn');
const autorize = new Authorize();
signInButton.addEventListener('click', () => {
  autorize.googleSignIn();
});
