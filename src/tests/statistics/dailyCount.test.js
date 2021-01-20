import moment from 'moment';
import dailyCount from '../../statistics/dailyCount';
import expenses from '../fixtures/expenses';

test('should return chartKey array only if no expense', () => {
  const category = dailyCount([]);
  expect(category).toEqual([['Date', 'Number Of Expenses']]);
});

test('should calculate daily count for a single expense', () => {
  const category = dailyCount([expenses[1]]);
  expect(category).toEqual([
    ['Date', 'Number Of Expenses'],
    [`${moment(0).subtract(5, 'days').format('DD/MM')}`, 1],
  ]);
});

test('should calculate daily count for multiple expenses', () => {
  const category = dailyCount(expenses);
  expect(category).toEqual([
    ['Date', 'Number Of Expenses'],
    [`${moment(0).format('DD/MM')}`, 1],
    [`${moment(0).subtract(5, 'days').format('DD/MM')}`, 1],
    [`${moment(0).add(12, 'days').format('DD/MM')}`, 1],
    [`${moment(0).add(10, 'days').format('DD/MM')}`, 1],
  ]);
});
