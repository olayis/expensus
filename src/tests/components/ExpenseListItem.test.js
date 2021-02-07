import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseListItem } from '../../components/ExpenseListItem';

let wrapper, startRemoveExpense;

beforeEach(() => {
  startRemoveExpense = jest.fn();
  wrapper = shallow(
    <ExpenseListItem {...expenses[2]} startRemoveExpense={startRemoveExpense} />
  );
});

test('should render ExpenseListItem with expense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startRemoveExpense on click', () => {
  wrapper.find('.card-box__delete').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id,
  });
});
