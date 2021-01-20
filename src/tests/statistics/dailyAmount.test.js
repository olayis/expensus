import moment from 'moment';
import dailyAmount from '../../statistics/dailyAmount';
import expenses from '../fixtures/expenses';

test('should return chartKey array only if no expense', () => {
  const category = dailyAmount([]);
  expect(category).toEqual([['Date', 'Amount']]);
});

test('should calculate daily amount for a single expense', () => {
  const category = dailyAmount([expenses[1]]);
  expect(category).toEqual([
    ['Date', 'Amount'],
    [`${moment(0).subtract(5, 'days').format('DD/MM')}`, 350],
  ]);
});

test('should correctly calculate the daily amount for multiple expenses', () => {
  const category = dailyAmount(expenses);
  expect(category).toEqual([
    ['Date', 'Amount'],
    [`${moment(0).format('DD/MM')}`, 20],
    [`${moment(0).subtract(5, 'days').format('DD/MM')}`, 350],
    [`${moment(0).add(12, 'days').format('DD/MM')}`, 80],
    [`${moment(0).add(10, 'days').format('DD/MM')}`, 10],
  ]);
});
