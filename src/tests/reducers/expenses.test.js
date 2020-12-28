import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add an expense', () => {
  const expense = {
    id: '999',
    description: 'TV Subscription',
    note: '',
    amount: 560,
    createdAt: moment().subtract(7, 'days'),
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense an expense by id', () => {
  const description = 'Test Description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(description);
});

test('should not edit expense if id is not found', () => {
  const description = 'Edited Data';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[2]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[2]]);
});
