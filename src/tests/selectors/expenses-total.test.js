import selectExpensesTotal from '../../selectors/exepenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test('should add up a single expense', () => {
  const total = selectExpensesTotal([expenses[1]]);
  expect(total).toBe(35000);
});

test('should correctly add up multiple expenses', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(46000);
});
