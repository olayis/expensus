import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthprovider,
  yahooAuthProvider,
} from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid,
});

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startFacebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

export const startTwitterLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthprovider);
  };
};

export const startYahooLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(yahooAuthProvider);
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
