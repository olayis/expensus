import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Data',
    note: '',
    amount: 2000,
    createdAt: 0,
    category: 'Bills & Utilities',
  },
  {
    id: '2',
    description: 'Home Rentage',
    note: '',
    amount: 35000,
    createdAt: moment(0).subtract(5, 'days'),
    category: 'Rent',
  },
  {
    id: '3',
    description: 'Room Repainting',
    note: '',
    amount: 8000,
    createdAt: moment(0).add(12, 'days'),
    category: 'Maintenance',
  },
  {
    id: '4',
    description: 'Water Pipes Repair',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(10, 'days'),
    category: 'Maintenance',
  },
];
