import database from '../firebase/firebase';

// CHANGE_LOCALE
export const changeLocale = (locale) => ({
  type: 'CHANGE_LOCALE',
  locale,
});

export const startChangeCurrency = (localeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { currency = 'Naira' } = localeData;

    const locale = { currency };

    return database
      .ref(`users/${uid}/locale`)
      .update(locale)
      .then(() => {
        dispatch(changeLocale(locale));
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
