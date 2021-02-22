import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseListItem } from '../../components/ExpenseListItem';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ExpenseListItem {...expenses[2]} />);
});

test('should render ExpenseListItem with expense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render confirmation modal on remove button click', () => {
  wrapper.find('.card-box__delete').simulate('click');
  expect(wrapper.state('modalSelected')).toBe(true);
});
