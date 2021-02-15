import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'ThisIsMyTestUid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenses = [
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
      createdAt: '1969-12-27T00:00:00.000Z',
      category: 'Rent',
    },
    {
      id: '3',
      description: 'Electricity',
      note: '',
      amount: 8000,
      createdAt: '1970-01-13T00:00:00.000Z',
      category: 'Bills & Utilities',
    },
    {
      id: '4',
      description: 'Fuel',
      note: '',
      amount: 8000,
      createdAt: '1970-01-13T00:00:00.000Z',
      category: 'Transportation',
    },
  ];

  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt, category }) => {
    expensesData[id] = { description, note, amount, createdAt, category };
  });

  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;

  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should set up edit expense action object', () => {
  const action = editExpense('123abc', { description: 'a new value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { description: 'a new value' },
  });
});

test('should edit expense on database', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { amount: 500 };

  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});

test('should set up add expense object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Phone',
    amount: 88300,
    note: 'A random phone',
    createdAt: 200,
    category: 'Gadgets',
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
    category: 'Uncategorized',
  };

  store
    .dispatch(startAddExpense(defaultAuthState))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

test('should setup setExpense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('should fetch the expenses from firebase', (done) => {
  const expenses = [
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
      createdAt: '1969-12-27T00:00:00.000Z',
      category: 'Rent',
    },
    {
      id: '3',
      description: 'Electricity',
      note: '',
      amount: 8000,
      createdAt: '1970-01-13T00:00:00.000Z',
      category: 'Bills & Utilities',
    },
    {
      id: '4',
      description: 'Fuel',
      note: '',
      amount: 8000,
      createdAt: '1970-01-13T00:00:00.000Z',
      category: 'Transportation',
    },
  ];

  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});
