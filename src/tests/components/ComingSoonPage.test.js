import React from 'react';
import { shallow } from 'enzyme';
import ComingSoonPage from '../../components/ComingSoonPage';

test('should render ComingSoonPage correctly', () => {
  const wrapper = shallow(<ComingSoonPage />);
  expect(wrapper).toMatchSnapshot();
});
