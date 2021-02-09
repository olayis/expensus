import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date(recent)',
    startDate: null,
    endDate: null,
  });
});

test('should set up sortBy to highest amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT_HIGHEST' });
  expect(state.sortBy).toBe('amount(highest)');
});

test('should set up sortBy to lowest amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT_LOWEST' });
  expect(state.sortBy).toBe('amount(lowest)');
});

test('should set up sortBy to recent date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount(lowest)',
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: 'SORT_BY_DATE_RECENT' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date(recent)');
});

test('should set up sortBy to oldest date', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_DATE_OLDEST' });
  expect(state.sortBy).toBe('date(oldest)');
});

test('should set up sortBy to description from A to Z', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_DESCRIPTION_A_TO_Z',
  });
  expect(state.sortBy).toBe('description(a_to_z)');
});

test('should set up sortBy to description from Z to A', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_DESCRIPTION_Z_TO_A',
  });
  expect(state.sortBy).toBe('description(z_to_a)');
});

test('should set up sortBy to category', () => {
  const currentState = {
    text: '',
    sortBy: 'date(oldest)',
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: 'SORT_BY_CATEGORY' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('category');
});

test('should set text filter', () => {
  const text = 'My filter value';
  const action = { type: 'SET_TEXT_FILTER', text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set up set start date', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set up set end date', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
