import database from '../firebase/firebase';
import startLogError from './logError';

export const startDeleteData = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}`)
      .remove()
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
