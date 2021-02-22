import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillAlt,
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faTags, faTrash } from '@fortawesome/free-solid-svg-icons';
import { startRemoveExpense } from '../actions/expenses';
import ConfirmationModal from './ConfirmationModal';

export class ExpenseListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalSelected: false,
    };
  }

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.id });
  };

  toggleModalSelection = () => {
    this.setState((prevState) => ({
      modalSelected: !prevState.modalSelected,
    }));
  };

  render() {
    return (
      <>
        <div className='card-box'>
          <button
            className='card-box__delete'
            onClick={this.toggleModalSelection}
            aria-label='Remove expense'
          >
            <FontAwesomeIcon className='fa-icon' icon={faTrash} />
          </button>
          <Link className='router-link' to={`edit/${this.props.id}`}>
            <h3 className='card-box__description'>{this.props.description}</h3>
            <p className='card-box__amount'>
              <FontAwesomeIcon className='fa-icon' icon={faMoneyBillAlt} />
              {numeral(this.props.amount / 100).format('$0,0.00')}
            </p>
            <p className='card-box__category'>
              <FontAwesomeIcon className='fa-icon' icon={faTags} />
              {this.props.category}
            </p>
            <p className='card-box__date'>
              <FontAwesomeIcon className='fa-icon' icon={faCalendarAlt} />
              {moment(this.props.createdAt).format('MMM Do, YYYY')}
            </p>
          </Link>
        </div>
        <ConfirmationModal
          handleModalAction={this.onRemove}
          modalSelected={this.state.modalSelected}
          cancelModalSelection={this.toggleModalSelection}
          modalTitle='Confirm Delete'
          modalDescription={`Delete ${this.props.description}`}
          actionButtonLabel='Delete'
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

export default connect(undefined, mapDispatchToProps)(ExpenseListItem);
