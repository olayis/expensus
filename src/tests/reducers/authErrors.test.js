import authErrorsReducer from '../../reducers/authErrors';

test('should set up default authErrors values', () => {
  const state = authErrorsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    networkError: null,
    otherErrors: null,
  });
});

test('should set up networkError to true', () => {
  const state = authErrorsReducer(undefined, { type: 'AUTH_NETWORK_ERROR' });
  expect(state.networkError).toBe(true);
});

test('should set up otherErrors to true', () => {
  const state = authErrorsReducer(undefined, { type: 'AUTH_OTHER_ERRORS' });
  expect(state.otherErrors).toBe(true);
});

test('should set up networkError to false', () => {
  const currentState = {
    networkError: true,
    otherErrors: null,
  };

  const action = { type: 'CANCEL_AUTH_NETWORK_ERROR' };
  const state = authErrorsReducer(currentState, action);
  expect(state.networkError).toBe(false);
});

test('should set up otherErrors to false', () => {
  const currentState = {
    networkError: false,
    otherErrors: true,
  };

  const action = { type: 'CANCEL_AUTH_OTHER_ERRORS' };
  const state = authErrorsReducer(currentState, action);
  expect(state.otherErrors).toBe(false);
});
