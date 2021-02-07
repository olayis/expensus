import database from '../firebase/firebase';

// DELETE_DATA
export const deleteData = () => ({
  type: 'DELETE_DATA',
});

export const startDeleteData = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}`)
      .remove()
      .then(() => {
        dispatch(deleteData());
      });
  };
};

// DELETE_DATA_SELECTED
export const deleteDataSelected = (deleteSelected) => ({
  type: 'DELETE_DATA_SELECTED',
  deleteSelected,
});

export const startDeleteDataSelected = () => {
  return (dispatch) => {
    return dispatch(deleteDataSelected(true));
  };
};

export const stopDeleteDataSelected = () => {
  return (dispatch) => {
    return dispatch(deleteDataSelected(false));
  };
};
