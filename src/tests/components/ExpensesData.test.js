import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesData } from '../../components/ExpensesData';

test('should render ExpensesData with expenses', () => {
  const wrapper = shallow(<ExpensesData expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesData with empty message', () => {
  const wrapper = shallow(
    <ExpensesData expenses={[]} expensesWithoutFilters={[]} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesData with filters message', () => {
  const wrapper = shallow(
    <ExpensesData expenses={[]} expensesWithoutFilters={expenses} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should handle startDeleteData on click', () => {
  const handleStartDeleteDataSelected = jest.fn();
  const startDeleteDataSelected = jest.fn();
  const wrapper = shallow(
    <ExpensesData
      expenses={[]}
      expensesWithoutFilters={expenses}
      startDeleteDataSelected={startDeleteDataSelected}
    />
  );
  wrapper.find('.component__delete-btn').simulate('click');
  expect(startDeleteDataSelected).toHaveBeenCalled();
});
