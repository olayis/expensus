import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthprovider,
  yahooAuthProvider,
} from '../firebase/firebase';
import authErrorHandler from '../utils/helpers/authErrorHandler';
import logEvent from './logEvent';

export const login = (uid) => ({
  type: 'LOGIN',
  uid,
});

export const startGoogleLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        logEvent('sign_in', { provider: 'Google' });
      })
      .catch((error) => {
        authErrorHandler(error);
      });
  };
};

export const startFacebookLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then(() => {
        logEvent('sign_in', { provider: 'Facebook' });
      })
      .catch((error) => {
        authErrorHandler(error);
      });
  };
};

export const startTwitterLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(twitterAuthprovider)
      .then(() => {
        logEvent('sign_in', { provider: 'Twitter' });
      })
      .catch((error) => {
        authErrorHandler(error);
      });
  };
};

export const startYahooLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(yahooAuthProvider)
      .then(() => {
        logEvent('sign_in', { provider: 'Yahoo' });
      })
      .catch((error) => {
        authErrorHandler(error);
      });
  };
};

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => {
  return () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        logEvent('sign_out', { info: 'User signed out' });
      });
  };
};
