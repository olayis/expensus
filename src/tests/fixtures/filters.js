import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date(recent)',
  startDate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: 'bills',
  sortBy: 'amount(highest)',
  startDate: moment(0),
  endDate: moment(0).add(4, 'days'),
};

export { filters, altFilters };
