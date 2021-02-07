import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => {
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

  return (
    <div>
      <Modal
        contentLabel='Are you sure?'
        isOpen={!!props.deleteSelected}
        onRequestClose={props.stopDeleteDataSelected}
        closeTimeoutMS={200}
        className='modal'
        aria={{
          labelledby: 'heading',
          describedby: 'full_description',
        }}
      >
        <h3 id='heading' className='modal__title'>
          Delete Data
        </h3>
        <p id='full_description' className='modal__body'>
          Are you sure you want to delete all of your data on Expensus?
        </p>
        <button className='modal__btn--delete' onClick={props.handleDeleteData}>
          Delete
        </button>
        <button
          className='modal__btn--cancel'
          onClick={props.stopDeleteDataSelected}
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
