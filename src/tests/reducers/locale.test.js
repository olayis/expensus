import localeReducer from '../../reducers/locale';
import locales from '../fixtures/locales';

test('should set default state', () => {
  const state = localeReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({ currency: null });
});

test('should update a locale', () => {
  const locale = locales[3];
  const action = {
    type: 'CHANGE_LOCALE',
    currency: locale.currency,
  };
  const state = localeReducer(locale, action);
  expect(state).toEqual({ locale: action.currency });
});

test('should set locale', () => {
  const locale = locales[2];
  const action = {
    type: 'SET_LOCALE',
    locale,
  };
  const state = localeReducer(locale, action);
  expect(state).toEqual(locale);
});
