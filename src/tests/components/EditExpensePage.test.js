import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[1]}
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />
    );
});

test('should render editExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense on click', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
});