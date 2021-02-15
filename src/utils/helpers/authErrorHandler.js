import store from '../../store/configureStore';
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
import { startErrorLog } from '../../actions/errorLog';

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

    const authError = {
      message: 'Authentication Other Errors',
      stack: 'authErrorHandler.js, auth.js',
    };
    store.dispatch(startErrorLog(authError, error.code));
  }
};
