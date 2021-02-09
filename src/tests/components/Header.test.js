import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import providerData from '../fixtures/providerData';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header userInfo={providerData} />);
  expect(wrapper).toMatchSnapshot();
});

test('should open sidebar on expand sidebar click', () => {
  const openSidebar = jest.fn();
  const wrapper = shallow(
    <Header userInfo={providerData} openSidebar={openSidebar} />
  );
  wrapper.find('.header__icon').simulate('click');
  expect(openSidebar).toHaveBeenCalled();
});

test('should close sidebar on overlay click', () => {
  const closeSidebar = jest.fn();
  const wrapper = shallow(
    <Header
      userInfo={providerData}
      closeSidebar={closeSidebar}
      sidebarOpen={true}
    />
  );
  wrapper.find('.sidebar__overlay--open').simulate('click');
  expect(closeSidebar).toHaveBeenCalled();
});
