// Filters Reducer
import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date(recent)',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };

    case 'SORT_BY_DATE_RECENT':
      return {
        ...state,
        sortBy: 'date(recent)',
      };

    case 'SORT_BY_DATE_OLDEST':
      return {
        ...state,
        sortBy: 'date(oldest)',
      };

    case 'SORT_BY_AMOUNT_HIGHEST':
      return {
        ...state,
        sortBy: 'amount(highest)',
      };

    case 'SORT_BY_AMOUNT_LOWEST':
      return {
        ...state,
        sortBy: 'amount(lowest)',
      };

    case 'SORT_BY_DESCRIPTION_A_TO_Z':
      return {
        ...state,
        sortBy: 'description(a_to_z)',
      };

    case 'SORT_BY_DESCRIPTION_Z_TO_A':
      return {
        ...state,
        sortBy: 'description(z_to_a)',
      };

    case 'SORT_BY_CATEGORY':
      return {
        ...state,
        sortBy: 'category',
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return state;
  }
};
