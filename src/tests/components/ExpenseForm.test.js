import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render both descriptionError and amountError if [description] and [amount] are not provided', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('descriptionError').length).toBeGreaterThan(0);
  expect(wrapper.state('amountError').length).toBeGreaterThan(0);
});

test('should render descriptionError if [description] is not provided but [amount] is provided', () => {
  const value = '23.64';
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('[placeholder="Amount"]').simulate('change', {
    target: { value },
  });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('amountError').length).toBe(0);
  expect(wrapper.state('descriptionError').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should render amountError if [amount] is not provided but [description] is provided', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('[placeholder="Description"]').simulate('change', {
    target: {
      value: expenses[0].description,
    },
  });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('amountError').length).toBeGreaterThan(0);
  expect(wrapper.state('descriptionError').length).toBe(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea', () => {
  const value = 'New Note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if input data is valid', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if input data is invalid', () => {
  const value = '12.432';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('descriptionError')).toBe('');
  expect(wrapper.state('amountError')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
    focused,
  });
  expect(wrapper.state('calendarFocused')).toBe(true);
});
