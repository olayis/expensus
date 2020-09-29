import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenses = [
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
            createdAt: '1969-12-27T00:00:00.000Z'
        },
        {
            id: '3',
            description: 'Electricity',
            note: '',
            amount: 8000,
            createdAt: '1970-01-13T00:00:00.000Z'
        }
    ];

    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });

    database.ref('expenses').set(expensesData).then(() => done());
});

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense(
        '123abc', { description: 'a new value' }
    );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc', updates: { description: 'a new value' }
    });
});

test('should set up add expense object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Phone',
        amount: 88300,
        note: 'A random phone',
        createdAt: 200
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('should setup setExpense actoion object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const expenses = [
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
            createdAt: '1969-12-27T00:00:00.000Z'
        },
        {
            id: '3',
            description: 'Electricity',
            note: '',
            amount: 8000,
            createdAt: '1970-01-13T00:00:00.000Z'
        }
    ];

    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});