export default (expenses) => {
  const amountTotal = expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
  const chartKey = ['ID', 'Total', 'Number', 'Category', 'Percentage'];
  const expensesArray = Object.values(
    expenses.reduce((arr, { category, amount }) => {
      arr[category] ??= { category, count: 0, amount: 0, percentage: 0 };
      arr[category].count++;
      arr[category].amount += amount;
      arr[category].percentage = (arr[category].amount / amountTotal) * 100;
      return arr;
    }, {})
  ).map((expense) => [
    expense.category,
    expense.amount / 100,
    expense.count,
    expense.category,
    expense.percentage,
  ]);

  return [chartKey, ...expensesArray];
};
