import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Data',
        note: '',
        amount: 2000,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 35000,
        createdAt: moment(0).subtract(5, 'days')
    },
    {
        id: '3',
        description: 'Electricity',
        note: '',
        amount: 8000,
        createdAt: moment(0).add(12, 'days')
    }
];