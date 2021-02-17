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

test('should call goBack prop when back button is clicked', () => {
  const history = { goBack: jest.fn() };
  const wrapper = shallow(
    <ExpensesData
      expenses={[]}
      expensesWithoutFilters={expenses}
      history={history}
    />
  );
  wrapper.find('.input-field__back').simulate('click');
  expect(history.goBack).toHaveBeenCalled();
});
