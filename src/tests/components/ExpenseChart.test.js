import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseChart from '../../components/ExpenseChart';

test('should render ExpensesChart with expenses data', () => {
  const wrapper = shallow(<ExpenseChart expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense component if there are no visible expenses', () => {
  const wrapper = shallow(<ExpenseChart expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
