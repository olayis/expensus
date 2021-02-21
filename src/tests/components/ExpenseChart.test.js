import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseChart from '../../components/ExpenseChart';

test('should render ExpensesChart with expenses data', () => {
  const wrapper = shallow(<ExpenseChart expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseChart with empty message', () => {
  const wrapper = shallow(
    <ExpenseChart expenses={[]} expensesWithoutFilters={[]} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseChart with filters message', () => {
  const wrapper = shallow(
    <ExpenseChart expenses={[]} expensesWithoutFilters={expenses} />
  );
  expect(wrapper).toMatchSnapshot();
});
