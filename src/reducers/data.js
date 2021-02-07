export default (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_DATA_SELECTED':
      return {
        deleteSelected: action.deleteSelected,
      };

    default:
      return state;
  }
};
