import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpensusDataDownload from '../../components/ExpensusDataDownload';

test('should render ExpensusDataDownload', () => {
  const wrapper = shallow(<ExpensusDataDownload expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
