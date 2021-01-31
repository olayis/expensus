import React from 'react';
import { shallow } from 'enzyme';
import { ChangeCurrency } from '../../components/ChangeCurrency';
import locales from '../fixtures/locales';

let startChangeLocale, history, wrapper;

beforeEach(() => {
  startChangeLocale = jest.fn();
  history = { push: jest.fn(), go: jest.fn() };
  wrapper = shallow(
    <ChangeCurrency startChangeLocale={startChangeLocale} history={history} />
  );
});

test('should render ChangeCurrency correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('CurrencyForm').prop('onSubmit')(locales[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startChangeLocale).toHaveBeenLastCalledWith(locales[0]);
});
