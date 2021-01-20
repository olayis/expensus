import moment from 'moment';
import {
  setTextFilter,
  sortByDateRecent,
  sortByDateOldest,
  sortByAmountHighest,
  sortByAmountLowest,
  sortByDescriptionAtoZ,
  sortByDescriptionZtoA,
  sortByCategory,
  setStartDate,
  setEndDate,
} from '../../actions/filters';

test('should generate set text filter action object with provided value', () => {
  const text = 'Test Value';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate sort by recent date action object', () => {
  expect(sortByDateRecent()).toEqual({ type: 'SORT_BY_DATE_RECENT' });
});

test('should generate sort by oldest date action object', () => {
  expect(sortByDateOldest()).toEqual({ type: 'SORT_BY_DATE_OLDEST' });
});

test('should generate sort by highest amount action object', () => {
  expect(sortByAmountHighest()).toEqual({ type: 'SORT_BY_AMOUNT_HIGHEST' });
});

test('should generate sort by lowest amount action object', () => {
  expect(sortByAmountLowest()).toEqual({ type: 'SORT_BY_AMOUNT_LOWEST' });
});

test('should generate sort by A to Z description action object', () => {
  expect(sortByDescriptionAtoZ()).toEqual({
    type: 'SORT_BY_DESCRIPTION_A_TO_Z',
  });
});

test('should generate sort by Z to A description action object', () => {
  expect(sortByDescriptionZtoA()).toEqual({
    type: 'SORT_BY_DESCRIPTION_Z_TO_A',
  });
});

test('should generate sort by category action object', () => {
  expect(sortByCategory()).toEqual({ type: 'SORT_BY_CATEGORY' });
});

test('should generate generate start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate generate end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});
