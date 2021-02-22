import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { NoExpense } from '../../components/NoExpense';
import { altFilters } from '../fixtures/filters';
import no_data from '../../../public/img/no_data.svg';

test('should render NoExpense with empty message', () => {
  const wrapper = shallow(
    <NoExpense
      expensesWithoutFilters={[]}
      noDataImage={no_data}
      noDataImageAlt='NO DATA ALT'
      noExpenseText='NO EXPENSE TEXT'
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense with text and date filters message', () => {
  const wrapper = shallow(
    <NoExpense
      expensesWithoutFilters={expenses}
      filters={altFilters}
      filterImage={no_data}
      filterImageAlt='FILTER ALT'
    />
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
    <NoExpense
      expensesWithoutFilters={expenses}
      filters={filters}
      filterImage={no_data}
      filterImageAlt='FILTER ALT'
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense with dates filter message', () => {
  const filters = {
    ...altFilters,
    text: '',
  };
  const wrapper = shallow(
    <NoExpense
      expensesWithoutFilters={expenses}
      filters={filters}
      filterImage={no_data}
      filterImageAlt='FILTER ALT'
    />
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
    <NoExpense
      expensesWithoutFilters={expenses}
      filters={filters}
      filterImage={no_data}
      filterImageAlt='FILTER ALT'
    />
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
    <NoExpense
      expensesWithoutFilters={expenses}
      filters={filters}
      filterImage={no_data}
      filterImageAlt='FILTER ALT'
    />
  );
  expect(wrapper).toMatchSnapshot();
});
