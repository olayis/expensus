import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillAlt,
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const ExpenseListItem = ({ id, description, amount, createdAt, category }) => (
  <Link className='router-link' to={`edit/${id}`}>
    <div className='card-box'>
      <h3 className='card-box__description'>{description}</h3>
      <p className='card-box__amount'>
        <FontAwesomeIcon className='fa-icon' icon={faMoneyBillAlt} />
        {numeral(amount / 100).format('$0,0.00')}
      </p>
      <p className='card-box__category'>
        <FontAwesomeIcon className='fa-icon' icon={faTags} />
        {category}
      </p>
      <p className='card-box__date'>
        <FontAwesomeIcon className='fa-icon' icon={faCalendarAlt} />
        {moment(createdAt).format('MMM Do, YYYY')}
      </p>
    </div>
  </Link>
);

export default ExpenseListItem;
