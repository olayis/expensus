import moment from 'moment';

export default (expenses) => {
  const formattedExpenses = expenses.map((expense) => ({
    createdAt: moment(expense.createdAt).format('DD/MM'),
    amount: expense.amount,
  }));
  const chartKey = ['Date', 'Amount'];
  const expensesArray = Object.values(
    formattedExpenses.reduce((arr, { createdAt, amount }) => {
      arr[createdAt] ??= { createdAt, amount: 0 };
      arr[createdAt].amount += amount;
      return arr;
    }, {})
  ).map((expense) => [expense.createdAt, expense.amount / 100]);

  return [chartKey, ...expensesArray];
};
