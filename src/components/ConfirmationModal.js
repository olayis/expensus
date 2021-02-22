import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => {
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

  return (
    <div>
      <Modal
        contentLabel={props.modalTitle}
        isOpen={props.modalSelected}
        onRequestClose={props.cancelModalSelection}
        closeTimeoutMS={200}
        className='modal'
        aria={{
          labelledby: 'heading',
          describedby: 'full_description',
        }}
      >
        <h3 id='heading' className='modal__title'>
          {props.modalTitle}
        </h3>
        <p id='full_description' className='modal__body'>
          {props.modalDescription}
        </p>
        <button
          className='modal__btn--action'
          onClick={props.handleModalAction}
        >
          {props.actionButtonLabel}
        </button>
        <button
          className='modal__btn--cancel'
          onClick={props.cancelModalSelection}
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
