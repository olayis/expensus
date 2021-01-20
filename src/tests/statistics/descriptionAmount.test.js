import descriptionAmount from '../../statistics/descriptionAmount';
import expenses from '../fixtures/expenses';

test('should return chartKey array only if no expense', () => {
  const category = descriptionAmount([]);
  expect(category).toEqual([['Title', 'Amount']]);
});

test('should return amount and description for a single expense', () => {
  const category = descriptionAmount([expenses[1]]);
  expect(category).toEqual([
    ['Title', 'Amount'],
    ['Home Rentage', 350],
  ]);
});

test('should return amount and description for multiple expenses', () => {
  const category = descriptionAmount(expenses);
  expect(category).toEqual([
    ['Title', 'Amount'],
    ['Data', 20],
    ['Home Rentage', 350],
    ['Room Repainting', 80],
    ['Water Pipes Repair', 10],
  ]);
});
