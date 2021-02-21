import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthprovider = new firebase.auth.TwitterAuthProvider();
const yahooAuthProvider = new firebase.auth.OAuthProvider('yahoo.com');

const analyticsMock = {
  logEvent: () => {},
  setCurrentScreen: () => {},
  setUserId: () => {},
};
const analytics =
  process.env.NODE_ENV !== 'test' ? firebase.analytics() : analyticsMock;

export {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthprovider,
  yahooAuthProvider,
  analytics,
  database as default,
};
