import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../../components/Navbar';

test('should render Navbar correctly', () => {
  const providerData = [
    {
      displayName: 'Test',
      email: 'test@example.com',
      photoURL: 'image url',
      providerId: 'expensus.com',
    },
  ];
  const wrapper = shallow(<Navbar userInfo={providerData} />);
  expect(wrapper).toMatchSnapshot();
});
