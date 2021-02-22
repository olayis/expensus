import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { startLogout } from '../actions/auth';
import startDeleteData from '../actions/data';
import ConfirmationModal from './ConfirmationModal';

export class ExpensusDataDelete extends React.Component {
  state = {
    modalSelected: false,
  };

  onDeleteData = () => {
    this.props.startDeleteData();
    this.props.startLogout();
  };

  toggleModalSelection = () => {
    this.setState((prevState) => ({
      modalSelected: !prevState.modalSelected,
    }));
  };

  render() {
    return (
      <>
        <div className='component'>
          <h2 className='heading-secondary'>
            <FontAwesomeIcon icon={faExclamationTriangle} className='fa-icon' />{' '}
            Delete Data
          </h2>
          <p className='component__message'>
            Note: This action is irreversible and will delete all Expensus's
            data relating to your account permanently.
          </p>
          <div className='component__content'>
            <button
              onClick={this.toggleModalSelection}
              className='component__delete-btn'
              aria-label='Delete your data on Expensus permanently'
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className='component__illustration component__illustration--delete'
              />
            </button>
          </div>
        </div>
        <ConfirmationModal
          modalSelected={this.state.modalSelected}
          handleModalAction={this.onDeleteData}
          cancelModalSelection={this.toggleModalSelection}
          modalTitle='Delete Data'
          modalDescription='Are you sure you want to delete all of your data on Expensus?'
          actionButtonLabel='Delete'
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startDeleteData: () => dispatch(startDeleteData()),
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(ExpensusDataDelete);
