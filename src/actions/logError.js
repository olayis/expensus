// APPLICATION ERROR BOUNDARY LOG
import database from '../firebase/firebase';

export const startLogError = (
  error = { message: '', stack: '' },
  errorInfo = ''
) => {
  return () => {
    // Extract 'message' and 'stack' from the error object
    const { message, stack } = error;
    const errorDetails = { message, stack };
    const errorTime = new Date().toString();
    const errorData = { errorDetails, errorInfo, errorTime };

    return database.ref('errors').push(errorData);
  };
};

export default startLogError;
