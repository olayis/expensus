import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter,
  setStartDate,
  setEndDate,
  sortByDateRecent,
  sortByDateOldest,
  sortByAmountHighest,
  sortByAmountLowest,
  sortByDescriptionAtoZ,
  sortByDescriptionZtoA,
  sortByCategory,
  wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDateRecent = jest.fn();
  sortByDateOldest = jest.fn();
  sortByAmountHighest = jest.fn();
  sortByAmountLowest = jest.fn();
  sortByDescriptionAtoZ = jest.fn();
  sortByDescriptionZtoA = jest.fn();
  sortByCategory = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByDateRecent={sortByDateRecent}
      sortByDateOldest={sortByDateOldest}
      sortByAmountHighest={sortByAmountHighest}
      sortByAmountLowest={sortByAmountLowest}
      sortByDescriptionAtoZ={sortByDescriptionAtoZ}
      sortByDescriptionZtoA={sortByDescriptionZtoA}
      sortByCategory={sortByCategory}
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
  const value = 'room';
  wrapper.find('input').simulate('change', {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by recent date', () => {
  const value = 'date(recent)';
  wrapper.setProps({ filters: altFilters });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDateRecent).toHaveBeenCalled();
});

test('should sort by oldest date', () => {
  const value = 'date(oldest)';
  wrapper.setProps({ filters: altFilters });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDateOldest).toHaveBeenCalled();
});

test('should sort by highest amount', () => {
  const value = 'amount(highest)';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmountHighest).toHaveBeenCalled();
});

test('should sort by lowest amount', () => {
  const value = 'amount(lowest)';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmountLowest).toHaveBeenCalled();
});

test('should sort by description from A to Z', () => {
  const value = 'description(a_to_z)';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDescriptionAtoZ).toHaveBeenCalled();
});

test('should sort by description from Z to A', () => {
  const value = 'description(z_to_a)';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDescriptionZtoA).toHaveBeenCalled();
});

test('should sort by category', () => {
  const value = 'category';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByCategory).toHaveBeenCalled();
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
