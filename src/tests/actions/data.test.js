import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  deleteData,
  deleteDataSelected,
  startDeleteData,
  startDeleteDataSelected,
  stopDeleteDataSelected,
} from '../../actions/data';
import database from '../../firebase/firebase';

const uid = 'ThisIsMyTestUid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

test('should set up delete data action object', () => {
  const action = deleteData();
  expect(action).toEqual({
    type: 'DELETE_DATA',
  });
});

test("should delete all users' data from firebase", (done) => {
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
  ];
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt, category }) => {
    expensesData[id] = { description, note, amount, createdAt, category };
  });

  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());

  const store = createMockStore(defaultAuthState);

  store
    .dispatch(startDeleteData())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'DELETE_DATA',
      });

      return database.ref(`users/${uid}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should set up deleteDataSelected action object', () => {
  const deleteSelected = true;
  const action = deleteDataSelected(deleteSelected);
  expect(action).toEqual({
    type: 'DELETE_DATA_SELECTED',
    deleteSelected,
  });
});

test('should set deleteDataSelected to true in store', () => {
  const store = createMockStore(defaultAuthState);
  const deleteSelected = true;

  store.dispatch(startDeleteDataSelected());
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'DELETE_DATA_SELECTED',
    deleteSelected,
  });
});

test('should set deleteDataSelected to false in store', () => {
  const store = createMockStore(defaultAuthState);
  const deleteSelected = false;

  store.dispatch(stopDeleteDataSelected());
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'DELETE_DATA_SELECTED',
    deleteSelected,
  });
});
