import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseList } from '../../components/ExpenseList';
import { altFilters } from '../fixtures/filters';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(
    <ExpenseList expenses={[]} expensesWithoutFilters={[]} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with text and date filters message', () => {
  const wrapper = shallow(
    <ExpenseList
      expenses={[]}
      expensesWithoutFilters={expenses}
      filters={altFilters}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with text filter message', () => {
  const filters = {
    ...altFilters,
    startDate: null,
    endDate: null,
  };
  const wrapper = shallow(
    <ExpenseList
      expenses={[]}
      expensesWithoutFilters={expenses}
      filters={filters}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with dates filter message', () => {
  const filters = {
    ...altFilters,
    text: '',
  };
  const wrapper = shallow(
    <ExpenseList
      expenses={[]}
      expensesWithoutFilters={expenses}
      filters={filters}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with startDate filter message', () => {
  const filters = {
    ...altFilters,
    text: '',
    endDate: null,
  };
  const wrapper = shallow(
    <ExpenseList
      expenses={[]}
      expensesWithoutFilters={expenses}
      filters={filters}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with endDate filter message', () => {
  const filters = {
    ...altFilters,
    text: '',
    startDate: null,
  };
  const wrapper = shallow(
    <ExpenseList
      expenses={[]}
      expensesWithoutFilters={expenses}
      filters={filters}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
