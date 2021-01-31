import React from 'react';
import { shallow } from 'enzyme';
import CurrencyForm from '../../components/CurrencyForm';
import locales from '../fixtures/locales';

test('should render CurrencyForm correctly', () => {
  const wrapper = shallow(<CurrencyForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render CurrencyForm with locale data', () => {
  const wrapper = shallow(<CurrencyForm locale={locales[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render both currencyError "currency" is not provided', () => {
  const wrapper = shallow(<CurrencyForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('currencyError').length).toBeGreaterThan(0);
});

test('should set currency on select', () => {
  const value = 'New Currency';
  const wrapper = shallow(<CurrencyForm />);
  wrapper.find('.dropdown').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('currency')).toBe(value);
});

test('should not set currency if input data is invalid', () => {
  const value = '';
  const wrapper = shallow(<CurrencyForm />);
  wrapper.find('.dropdown').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe(undefined);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <CurrencyForm locale={locales[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('currencyError')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    currency: locales[0].currency,
  });
});
