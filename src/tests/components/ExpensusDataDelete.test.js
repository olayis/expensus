import React from 'react';
import { shallow } from 'enzyme';
import { ExpensusDataDelete } from '../../components/ExpensusDataDelete';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ExpensusDataDelete />);
});

test('should render ExpensusDataDelete', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render confirmation modal on remove button click', () => {
  wrapper.find('.component__delete-btn').simulate('click');
  expect(wrapper.state('modalSelected')).toBe(true);
});
