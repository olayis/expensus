// APPLICATION ERROR BOUNDARY LOG
export const errorBoundaryLog = (error) => ({
  type: 'ERROR_BOUNDARY_LOG',
  error,
});

export const startAddExpense = (errorData = {}) => {
  return (dispatch) => {
    const { error = '', errorInfo = '' } = errorData;

    const error = { error, errorInfo };

    return database
      .ref(`errors`)
      .push(error)
      .then((ref) => {
        dispatch(errorBoundaryLog({ id: ref.key, ...error }));
      });
  };
};
