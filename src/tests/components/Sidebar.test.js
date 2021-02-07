import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from '../../components/Sidebar';

test('should render Sidebar correctly', () => {
  const wrapper = shallow(<Sidebar startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Sidebar startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

test('should close sidebar on close click', () => {
  const closeSidebar = jest.fn();
  const wrapper = shallow(
    <Sidebar closeSidebar={closeSidebar} sidebarOpen={true} />
  );
  wrapper.find('.sidebar__close .fa-icon').simulate('click');
  expect(closeSidebar).toHaveBeenCalled();
});
