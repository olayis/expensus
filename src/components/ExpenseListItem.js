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

export const ExpenseListItem = (props) => {
  const onRemove = () => {
    props.startRemoveExpense({ id: props.id });
  };

  return (
    <div className='card-box'>
      <button
        className='card-box__delete'
        onClick={onRemove}
        aria-label='Remove expense'
      >
        <FontAwesomeIcon className='fa-icon' icon={faTrash} />
      </button>
      <Link className='router-link' to={`edit/${props.id}`}>
        <h3 className='card-box__description'>{props.description}</h3>
        <p className='card-box__amount'>
          <FontAwesomeIcon className='fa-icon' icon={faMoneyBillAlt} />
          {numeral(props.amount / 100).format('$0,0.00')}
        </p>
        <p className='card-box__category'>
          <FontAwesomeIcon className='fa-icon' icon={faTags} />
          {props.category}
        </p>
        <p className='card-box__date'>
          <FontAwesomeIcon className='fa-icon' icon={faCalendarAlt} />
          {moment(props.createdAt).format('MMM Do, YYYY')}
        </p>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

export default connect(undefined, mapDispatchToProps)(ExpenseListItem);
