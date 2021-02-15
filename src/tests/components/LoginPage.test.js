import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startGoogleLogin,
  startFacebookLogin,
  startTwitterLogin,
  startYahooLogin,
  authErrors,
  cancelAuthNetworkError,
  cancelAuthOtherErrors,
  quote,
  author,
  wrapper;

beforeEach(() => {
  startGoogleLogin = jest.fn();
  startFacebookLogin = jest.fn();
  startTwitterLogin = jest.fn();
  startYahooLogin = jest.fn();
  cancelAuthNetworkError = jest.fn();
  cancelAuthOtherErrors = jest.fn();
  quote = 'Random quote';
  author = "Random quote's author";
  authErrors = {
    networkError: true,
    otherErrors: true,
  };

  wrapper = shallow(
    <LoginPage
      startGoogleLogin={startGoogleLogin}
      startFacebookLogin={startFacebookLogin}
      startTwitterLogin={startTwitterLogin}
      startYahooLogin={startYahooLogin}
      cancelAuthNetworkError={cancelAuthNetworkError}
      cancelAuthOtherErrors={cancelAuthOtherErrors}
      quote={quote}
      author={author}
      authErrors={authErrors}
    />
  );
});

test('should render Login page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startGoogleLogin on button click', () => {
  wrapper.find('.btn__login--google').simulate('click');
  expect(startGoogleLogin).toHaveBeenCalled();
});

test('should call startFacebookLogin on button click', () => {
  wrapper.find('.btn__login--facebook').simulate('click');
  expect(startFacebookLogin).toHaveBeenCalled();
});

test('should call startTwitterLogin on button click', () => {
  wrapper.find('.btn__login--twitter').simulate('click');
  expect(startTwitterLogin).toHaveBeenCalled();
});

test('should call startYahooLogin on button click', () => {
  wrapper.find('.btn__login--yahoo').simulate('click');
  expect(startYahooLogin).toHaveBeenCalled();
});

test('should call cancelAuthNetworkError on button click', () => {
  wrapper.find('.auth-error__close--network').simulate('click');
  expect(cancelAuthNetworkError).toHaveBeenCalled();
});

test('should call cancelAuthOtherErrors on button click', () => {
  wrapper.find('.auth-error__close--others').simulate('click');
  expect(cancelAuthOtherErrors).toHaveBeenCalled();
});

test('should only render network error message when networkError is true', () => {
  const quote = 'Random quote';
  const author = "Random quote's author";
  const authErrors = {
    networkError: true,
    otherErrors: false,
  };
  const wrapper = shallow(
    <LoginPage quote={quote} author={author} authErrors={authErrors} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should only render otherErrors message when otherErrors is true', () => {
  const quote = 'Random quote';
  const author = "Random quote's author";
  const authErrors = {
    networkError: false,
    otherErrors: true,
  };
  const wrapper = shallow(
    <LoginPage quote={quote} author={author} authErrors={authErrors} />
  );
  expect(wrapper).toMatchSnapshot();
});
