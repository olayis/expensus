// Get Visible expenses
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date(recent)':
          return a.createdAt < b.createdAt ? 1 : -1;

        case 'date(oldest)':
          return a.createdAt > b.createdAt ? 1 : -1;

        case 'amount(highest)':
          return a.amount < b.amount ? 1 : -1;

        case 'amount(lowest)':
          return a.amount > b.amount ? 1 : -1;

        case 'description(a_to_z)':
          return a.description.localeCompare(b.description);

        case 'description(z_to_a)':
          return b.description.localeCompare(a.description);

        case 'category':
          return a.category.localeCompare(b.category);
      }
    });
};
