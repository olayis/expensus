import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../../components/ConfirmationModal';

test('should render ConfirmationModal on delete button click', () => {
  const wrapper = shallow(<ConfirmationModal deleteSelected={true} />);
  expect(wrapper).toMatchSnapshot();
});

test('should not render ConfirmationModal if delete button is not clicked', () => {
  const wrapper = shallow(<ConfirmationModal deleteSelected={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('should delete data on confirmation', () => {
  const onDeleteData = jest.fn();
  const wrapper = shallow(
    <ConfirmationModal deleteSelected={true} handleDeleteData={onDeleteData} />
  );
  wrapper.find('.modal__btn--delete').simulate('click');
  expect(onDeleteData).toHaveBeenCalled();
});

test('should close confirmationModal and cancel delete data on cancel button click', () => {
  const stopDeleteDataSelected = jest.fn();
  const wrapper = shallow(
    <ConfirmationModal
      deleteSelected={true}
      stopDeleteDataSelected={stopDeleteDataSelected}
    />
  );
  wrapper.find('.modal__btn--cancel').simulate('click');
  expect(stopDeleteDataSelected).toHaveBeenCalled();
});
