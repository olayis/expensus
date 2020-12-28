import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem with expense', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});
