import categoryCountAmount from '../../statistics/categoryCountAmount';
import expenses from '../fixtures/expenses';

test('should return chartKey array only if no expense', () => {
  const category = categoryCountAmount([]);
  expect(category).toEqual([
    ['ID', 'Total', 'Number', 'Category', 'Percentage'],
  ]);
});

test('should count a single expense"s category and add up it"s amount', () => {
  const category = categoryCountAmount([expenses[1]]);
  expect(category).toEqual([
    ['ID', 'Total', 'Number', 'Category', 'Percentage'],
    ['Ren...', 350, 1, 'Rent', 100],
  ]);
});

test('should correctly count multiple expenses and add up the amounts by category', () => {
  const category = categoryCountAmount(expenses);
  expect(category).toEqual([
    ['ID', 'Total', 'Number', 'Category', 'Percentage'],
    ['Bil...', 20, 1, 'Bills & Utilities', 4.3478260869565215],
    ['Ren...', 350, 1, 'Rent', 76.08695652173914],
    ['Mai...', 90, 2, 'Maintenance', 19.565217391304348],
  ]);
});
