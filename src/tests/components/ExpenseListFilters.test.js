import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  sortByDescription,
  wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  sortByDescription = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      sortByDescription={sortByDescription}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'electricity';
  wrapper.find('input').simulate('change', {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({ filters: altFilters });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should sort by description', () => {
  const value = 'description';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDescription).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const value = {
    startDate: moment(0).add(3, 'months'),
    endDate: moment(0).add(20, 'years'),
  };
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(value);
  expect(setStartDate).toHaveBeenLastCalledWith(value.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(value.endDate);
});

test('should handle date focus change', () => {
  const calendarFocused = 'startDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(
    calendarFocused
  );
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
