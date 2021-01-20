import moment from 'moment';

export default (expenses) => {
  const formattedExpenses = expenses.map((expense) => ({
    createdAt: moment(expense.createdAt).format('DD/MM'),
  }));
  const chartKey = ['Date', 'Number Of Expenses'];
  const expensesArray = Object.values(
    formattedExpenses.reduce((arr, { createdAt }) => {
      arr[createdAt] ??= { createdAt, count: 0 };
      arr[createdAt].count++;
      return arr;
    }, {})
  ).map((expense) => [expense.createdAt, expense.count]);

  return [chartKey, ...expensesArray];
};
