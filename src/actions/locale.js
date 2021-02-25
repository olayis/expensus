import database from '../firebase/firebase';
import logEvent from '../actions/logEvent';

// CHANGE_LOCALE
export const changeLocale = (locale) => ({
  type: 'CHANGE_LOCALE',
  locale,
});

export const startChangeLocale = (localeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { currency = 'Dollar' } = localeData;

    const locale = { currency };

    return database
      .ref(`users/${uid}/locale`)
      .update(locale)
      .then(() => {
        dispatch(changeLocale(locale));
        logEvent('change_currency', { info: 'User changed base currency' });
      });
  };
};

// SET_LOCALE
export const setLocale = (locale) => ({
  type: 'SET_LOCALE',
  locale,
});

export const startSetLocale = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/locale`)
      .once('value')
      .then((snapshot) => {
        const locale = snapshot.val();
        dispatch(setLocale(locale));
      });
  };
};
