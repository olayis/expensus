import React from 'react';
import { shallow } from 'enzyme';
import ExpenseChartItem from '../../components/ExpenseChartItem';

test('should render ExpenseChartItem with chart data', () => {
  const wrapper = shallow(
    <ExpenseChartItem
      title='Chart Title'
      width='100%'
      height='50rem'
      chartType='Chart Type'
      data={[1, 2, 3]}
      chartRootProps={{ 'data-testid': '1' }}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
