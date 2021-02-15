import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthprovider,
  yahooAuthProvider,
} from '../firebase/firebase';
import authErrorHandler from '../utils/helpers/authErrorHandler';

export const login = (uid) => ({
  type: 'LOGIN',
  uid,
});

export const startGoogleLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
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
    return firebase.auth().signOut();
  };
};
