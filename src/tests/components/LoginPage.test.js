import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should call startGoogleLogin on button click', () => {
  const startGoogleLogin = jest.fn();
  const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} />);
  wrapper.find('.btn__login--google').simulate('click');
  expect(startGoogleLogin).toHaveBeenCalled();
});

test('should call startFacebookLogin on button click', () => {
  const startFacebookLogin = jest.fn();
  const wrapper = shallow(
    <LoginPage startFacebookLogin={startFacebookLogin} />
  );
  wrapper.find('.btn__login--facebook').simulate('click');
  expect(startFacebookLogin).toHaveBeenCalled();
});

test('should call startTwitterLogin on button click', () => {
  const startTwitterLogin = jest.fn();
  const wrapper = shallow(<LoginPage startTwitterLogin={startTwitterLogin} />);
  wrapper.find('.btn__login--twitter').simulate('click');
  expect(startTwitterLogin).toHaveBeenCalled();
});

test('should call startYahooLogin on button click', () => {
  const startYahooLogin = jest.fn();
  const wrapper = shallow(<LoginPage startYahooLogin={startYahooLogin} />);
  wrapper.find('.btn__login--yahoo').simulate('click');
  expect(startYahooLogin).toHaveBeenCalled();
});

test('should call cancelAuthNetworkError on button click', () => {
  const cancelAuthNetworkError = jest.fn();
  const authErrors = {
    networkError: true,
    otherErrors: null,
  };

  const wrapper = shallow(
    <LoginPage
      cancelAuthNetworkError={cancelAuthNetworkError}
      authErrors={authErrors}
    />
  );
  wrapper.find('.auth-error__close').simulate('click');
  expect(cancelAuthNetworkError).toHaveBeenCalled();
});

test('should call cancelAuthOtherErrors on button click', () => {
  const cancelAuthOtherErrors = jest.fn();
  const authErrors = {
    networkError: false,
    otherErrors: true,
  };

  const wrapper = shallow(
    <LoginPage
      cancelAuthOtherErrors={cancelAuthNetworkError}
      authErrors={authErrors}
    />
  );
  wrapper.find('.auth-error__close').simulate('click');
  expect(cancelAuthOtherErrors).toHaveBeenCalled();
});
