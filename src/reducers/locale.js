// Currency Reducer
const localeReducerDefaultState = { currency: null };

export default (state = localeReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return { locale: action.currency };

    case 'SET_LOCALE':
      return action.locale;

    default:
      return state;
  }
};
