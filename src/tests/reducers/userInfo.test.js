import userInfoReducer from '../../reducers/userInfo';
import providerData from '../fixtures/providerData';

test('should set default state for userInfo', () => {
  const state = userInfoReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set providerData for userInfo', () => {
  const action = {
    type: 'USER_INFO',
    providerData,
  };
  const state = userInfoReducer({}, action);
  expect(state).toEqual({ providerData });
});
