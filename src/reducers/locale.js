// Currency Reducer

const localeReducerDefaultState = { currency: 'Naira' };

export default (state = localeReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENCY':
      return { currency: action.currency };

    case 'SET_CURRENCY':
      return action.currency;

    default:
      return state;
  }
};
