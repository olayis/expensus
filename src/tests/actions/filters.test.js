import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  sortByDescription,
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

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by description action object', () => {
  expect(sortByDescription()).toEqual({ type: 'SORT_BY_DESCRIPTION' });
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
