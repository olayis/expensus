import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../../components/Navbar';
import providerData from '../fixtures/providerData';

test('should render Navbar correctly', () => {
  const wrapper = shallow(<Navbar userInfo={providerData} />);
  expect(wrapper).toMatchSnapshot();
});

test('should open sidebar on expand sidebar click', () => {
  const openSidebar = jest.fn();
  const wrapper = shallow(
    <Navbar userInfo={providerData} openSidebar={openSidebar} />
  );
  wrapper.find('.navbar__icon').simulate('click');
  expect(openSidebar).toHaveBeenCalled();
});

test('should close sidebar on overlay click', () => {
  const closeSidebar = jest.fn();
  const wrapper = shallow(
    <Navbar
      userInfo={providerData}
      closeSidebar={closeSidebar}
      sidebarOpen={true}
    />
  );
  wrapper.find('.sidebar__overlay--open').simulate('click');
  expect(closeSidebar).toHaveBeenCalled();
});
