import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import startDeleteData from '../../actions/data';
import database from '../../firebase/firebase';

const uid = 'ThisIsMyTestUid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

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
      return database.ref(`users/${uid}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});
