import {
  authNetworkError,
  authOtherErrors,
  cancelAuthNetworkError,
  cancelAuthOtherErrors,
} from '../../actions/authErrors';

test('should generate authNetworkError action object', () => {
  expect(authNetworkError()).toEqual({ type: 'AUTH_NETWORK_ERROR' });
});

test('should generate authOtherErrors action object', () => {
  expect(authOtherErrors()).toEqual({ type: 'AUTH_OTHER_ERRORS' });
});

test('should generate cancelAuthNetworkError action object', () => {
  expect(cancelAuthNetworkError()).toEqual({
    type: 'CANCEL_AUTH_NETWORK_ERROR',
  });
});

test('should generate cancelAuthOtherErrors action object', () => {
  expect(cancelAuthOtherErrors()).toEqual({
    type: 'CANCEL_AUTH_OTHER_ERRORS',
  });
});
