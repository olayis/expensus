import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date(recent)',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[3], expenses[1]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date(recent)',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[3], expenses[0]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date(recent)',
    startDate: undefined,
    endDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by recent date', () => {
  const filters = {
    text: '',
    sortBy: 'date(recent)',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[3], expenses[0], expenses[1]]);
});

test('should sort by oldest date', () => {
  const filters = {
    text: '',
    sortBy: 'date(oldest)',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[3], expenses[2]]);
});

test('should sort by highest amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount(highest)',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0], expenses[3]]);
});

test('should sort by lowest amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount(lowest)',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[3], expenses[0], expenses[2], expenses[1]]);
});

test('should sort by description from A to Z', () => {
  const filters = {
    text: '',
    sortBy: 'description(a_to_z)',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
});

test('should sort by description from Z to A', () => {
  const filters = {
    text: '',
    sortBy: 'description(z_to_a)',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[3], expenses[2], expenses[1], expenses[0]]);
});

test('should sort by category', () => {
  const filters = {
    text: '',
    sortBy: 'category',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2], expenses[3], expenses[1]]);
});
