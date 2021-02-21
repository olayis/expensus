import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { NoExpense } from '../../components/NoExpense';
import { altFilters } from '../fixtures/filters';

test('should render NoExpense with empty message', () => {
  const wrapper = shallow(<NoExpense expensesWithoutFilters={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense with text and date filters message', () => {
  const wrapper = shallow(
    <NoExpense expensesWithoutFilters={expenses} filters={altFilters} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense with text filter message', () => {
  const filters = {
    ...altFilters,
    startDate: null,
    endDate: null,
  };
  const wrapper = shallow(
    <NoExpense expensesWithoutFilters={expenses} filters={filters} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense with dates filter message', () => {
  const filters = {
    ...altFilters,
    text: '',
  };
  const wrapper = shallow(
    <NoExpense expensesWithoutFilters={expenses} filters={filters} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense with startDate filter message', () => {
  const filters = {
    ...altFilters,
    text: '',
    endDate: null,
  };
  const wrapper = shallow(
    <NoExpense expensesWithoutFilters={expenses} filters={filters} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense with endDate filter message', () => {
  const filters = {
    ...altFilters,
    text: '',
    startDate: null,
  };
  const wrapper = shallow(
    <NoExpense expensesWithoutFilters={expenses} filters={filters} />
  );
  expect(wrapper).toMatchSnapshot();
});
