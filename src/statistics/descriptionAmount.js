// Individual Expense Description and Amount

export default (expenses) => {
  const chartKey = ['Title', 'Amount'];
  const expensesArray = expenses.map((expense) => [
    expense.description,
    expense.amount / 100,
  ]);

  return [chartKey, ...expensesArray];
};
