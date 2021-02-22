import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../../components/ConfirmationModal';

test('should render ConfirmationModal on confirmation button click', () => {
  const wrapper = shallow(
    <ConfirmationModal
      modalSelected={true}
      handleModalAction={jest.fn()}
      cancelModalSelection={jest.fn()}
      modalTitle='MODAL TITLE'
      modalDescription='MODAL DESCRIPTION'
      actionButtonLabel='ACTION'
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should not render ConfirmationModal if action button is not clicked', () => {
  const wrapper = shallow(<ConfirmationModal modalSelected={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('should run action on confirmation', () => {
  const onConfirmation = jest.fn();
  const wrapper = shallow(
    <ConfirmationModal
      modalSelected={true}
      handleModalAction={onConfirmation}
      cancelModalSelection={jest.fn()}
      modalTitle='MODAL TITLE'
      modalDescription='MODAL DESCRIPTION'
      actionButtonLabel='ACTION'
    />
  );
  wrapper.find('.modal__btn--action').simulate('click');
  expect(onConfirmation).toHaveBeenCalled();
});

test('should close confirmationModal and cancel action on cancel button click', () => {
  const cancelModalSelection = jest.fn();
  const wrapper = shallow(
    <ConfirmationModal
      modalSelected={true}
      handleModalAction={jest.fn()}
      cancelModalSelection={cancelModalSelection}
      modalTitle='MODAL TITLE'
      modalDescription='MODAL DESCRIPTION'
      actionButtonLabel='ACTION'
    />
  );
  wrapper.find('.modal__btn--cancel').simulate('click');
  expect(cancelModalSelection).toHaveBeenCalled();
});
