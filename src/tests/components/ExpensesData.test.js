import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesData } from '../../components/ExpensesData';

test('should render ExpensesData with expenses', () => {
  const wrapper = shallow(<ExpensesData expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesData with empty message', () => {
  const wrapper = shallow(<ExpensesData expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
