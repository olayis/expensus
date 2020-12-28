import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={41} expensesTotal={871387747} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 0 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={0} expensesTotal={0} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={2000} />
  );
  expect(wrapper).toMatchSnapshot();
});
