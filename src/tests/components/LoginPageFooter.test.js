import React from 'react';
import { shallow } from 'enzyme';
import LoginPageFooter from '../../components/LoginPageFooter';

test('should render LoginPageFooter correctly', () => {
  const wrapper = shallow(<LoginPageFooter />);
  expect(wrapper).toMatchSnapshot();
});
