import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthprovider,
  yahooAuthProvider,
} from '../firebase/firebase';

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
        }
      });
  };
};

export const startFacebookLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .catch((error) => {
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
        }
      });
  };
};

export const startTwitterLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(twitterAuthprovider)
      .catch((error) => {
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
        }
      });
  };
};

export const startYahooLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(yahooAuthProvider)
      .catch((error) => {
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
        }
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
