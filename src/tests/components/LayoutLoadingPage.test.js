import React from 'react';
import { shallow } from 'enzyme';
import LayoutLoadingPage from '../../components/LayoutLoadingPage';

test('should render LayoutLoadingPage correctly', () => {
  const wrapper = shallow(<LayoutLoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
