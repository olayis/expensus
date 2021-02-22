import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import startLogError from '../../actions/logError';
import database from '../../firebase/firebase';

const uid = 'ThisIsMyTestUid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  database
    .ref('errors')
    .remove()
    .then(() => done());
});

test('should add error to database', (done) => {
  const store = createMockStore(defaultAuthState);
  const error = { message: 'Test error message', stack: 'Test error stack' };
  const errorInfo = 'Test error info';

  store.dispatch(startLogError(error, errorInfo)).then(() => {
    return database
      .ref('errors')
      .once('value')
      .then((snapshot) => {
        expect(snapshot.val()).toBeTruthy();
        done();
      });
  });
});
