import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthprovider,
  yahooAuthProvider,
} from '../../firebase/firebase';
import {
  authNetworkError,
  authOtherErrors,
  cancelAuthNetworkError,
  cancelAuthOtherErrors,
} from '../../actions/authErrors';
import { store } from '../../app';

const getProviderForProviderId = (id) => {
  switch (id) {
    case 'google.com':
      return googleAuthProvider;

    case 'facebook.com':
      return facebookAuthProvider;

    case 'twitter.com':
      return twitterAuthprovider;

    case 'yahoo.com':
      return yahooAuthProvider;
  }
};

export default (error) => {
  if (error.code === 'auth/account-exists-with-different-credential') {
    const pendingCred = error.credential;
    const email = error.email;
    firebase
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then((methods) => {
        const provider = getProviderForProviderId(methods[0]);
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            result.user
              .linkWithCredential(pendingCred)
              .then(function (usercred) {
                return;
              });
          });
      });
  } else if ((error.code = 'auth/network-request-failed')) {
    store.dispatch(authNetworkError());
    setTimeout(() => {
      store.dispatch(cancelAuthNetworkError());
    }, 15000);
  } else {
    store.dispatch(authOtherErrors());
    setTimeout(() => {
      store.dispatch(cancelAuthOtherErrors());
    }, 15000);
  }
};
