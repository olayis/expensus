import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  changeLocale,
  startChangeLocale,
  setLocale,
  startSetLocale,
} from '../../actions/locale';
import locales from '../fixtures/locales';
import database from '../../firebase/firebase';

const uid = 'ThisIsMyTestUid';
const defaultAuthState = { auth: { uid } };
const locale = locales[3];
const createMockStore = configureMockStore([thunk]);

test('should set up change locale action object', () => {
  const action = changeLocale(locales[1]);
  expect(action).toEqual({
    type: 'CHANGE_LOCALE',
    locale: locales[1],
  });
});

test('should update locale in firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const currency = locale.currency;

  store
    .dispatch(startChangeLocale({ currency }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'CHANGE_LOCALE',
        locale,
      });

      return database.ref(`users/${uid}/locale`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().currency).toBe(locale.currency);
      done();
    });
});

test('should add locale with default to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const localeDefault = {
    currency: 'Dollar',
  };

  store
    .dispatch(startChangeLocale(defaultAuthState))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'CHANGE_LOCALE',
        locale: {
          ...localeDefault,
        },
      });

      return database.ref(`users/${uid}/locale/`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(localeDefault);
      done();
    });
});

test('should setup setLocale action object with data', () => {
  const action = setLocale(locale);
  expect(action).toEqual({
    type: 'SET_LOCALE',
    locale,
  });
});

test('should fetch the locale from firebase', (done) => {
  database.ref(`users/${uid}/locale`).set(locale);
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetLocale()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_LOCALE',
      locale,
    });
    done();
  });
});
