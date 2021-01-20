import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesCharts } from '../../components/ExpensesCharts';

test('should render ExpensesChart with expenses data', () => {
  const wrapper = shallow(<ExpensesCharts expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesCharts with empty message', () => {
  const wrapper = shallow(<ExpensesCharts expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
