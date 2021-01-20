import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';

test('should render Layout correctly', () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper).toMatchSnapshot();
});
