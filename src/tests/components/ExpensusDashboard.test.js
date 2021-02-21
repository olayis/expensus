import React from 'react';
import { shallow } from 'enzyme';
import { ExpensusDashboardPage } from '../../components/ExpensusDashboardPage';

test('should render expensus dashboard page correctly', () => {
  const wrapper = shallow(<ExpensusDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
