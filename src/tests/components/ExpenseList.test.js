import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseList from '../../components/ExpenseList';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense if there are no expenses', () => {
  const wrapper = shallow(
    <ExpenseList expenses={[]} expensesWithoutFilters={[]} />
  );
  expect(wrapper).toMatchSnapshot();
});
