import database from '../firebase/firebase';
import startLogError from './logError';
import logEvent from './logEvent';

export const startDeleteData = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}`)
      .remove()
      .then(() => {
        logEvent('delete_data', { info: 'User deleted data' });
      })
      .catch((errorInfo) => {
        startLogError(
          {
            message: "Failed to delete users' data",
            stack: 'src/actions/data.js',
          },
          errorInfo
        );
      });
  };
};

export default startDeleteData;
