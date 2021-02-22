import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensusData } from '../../components/ExpensusData';

test('should render ExpensusData with expenses', () => {
  const wrapper = shallow(<ExpensusData expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render NoExpense component if there are no visible expenses', () => {
  const wrapper = shallow(<ExpensusData expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call goBack prop when back button is clicked', () => {
  const history = { goBack: jest.fn() };
  const wrapper = shallow(
    <ExpensusData
      expenses={[]}
      expensesWithoutFilters={expenses}
      history={history}
    />
  );
  wrapper.find('.input-field__back').simulate('click');
  expect(history.goBack).toHaveBeenCalled();
});
