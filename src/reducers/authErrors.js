// Auth Error Reducer
const authErrorsReducerDefaultState = {
  networkError: null,
  otherErrors: null,
};

export default (state = authErrorsReducerDefaultState, action) => {
  switch (action.type) {
    case 'AUTH_NETWORK_ERROR':
      return {
        ...state,
        networkError: true,
      };

    case 'CANCEL_AUTH_NETWORK_ERROR':
      return {
        ...state,
        networkError: false,
      };

    case 'AUTH_OTHER_ERRORS':
      return {
        ...state,
        otherErrors: true,
      };

    case 'CANCEL_AUTH_OTHER_ERRORS':
      return {
        ...state,
        otherErrors: false,
      };

    default:
      return state;
  }
};
