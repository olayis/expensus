import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import no_data from '../../public/img/no_data.svg';
import filter from '../../public/img/filter.svg';

export const NoExpense = (props) => (
  <div className='no-expense'>
    {props.expensesWithoutFilters.length === 0 ? (
      <>
        <img
          src={no_data}
          alt='A clipboard showing no data'
          className='no-expense__illustration'
          width='648'
          height='633'
        />
        <p>
          No Expenses To Display.{' '}
          <Link to='/create' className='router-link router-link--add'>
            Add an Expense
          </Link>
        </p>
      </>
    ) : (
      <>
        <img
          src={filter}
          alt='A filter showing Expenses have been filtered'
          className='no-expense__illustration'
          width='883'
          height='608'
        />
        <p>
          No results found {props.filters.text && `for "${props.filters.text}"`}{' '}
          {props.filters.startDate &&
            `starting from ${moment(props.filters.startDate).format(
              'MMM Do, YYYY'
            )}`}{' '}
          {props.filters.endDate &&
            `ending at ${moment(props.filters.endDate).format('MMM Do, YYYY')}`}
        </p>
      </>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(NoExpense);
