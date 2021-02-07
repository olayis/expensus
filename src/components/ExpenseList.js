import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import no_data from '../../public/img/no_data.svg';
import filter from '../../public/img/filter.svg';
import splitEvery from '../utils/helpers/splitEvery';

export const ExpenseList = (props) => {
  return (
    <section className='content-container'>
      <div className='component-container'>
        <h2 className='heading-secondary'>
          <FontAwesomeIcon icon={faEye} /> Expenses Overview
        </h2>
        {props.expenses.length === 0 ? (
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
                <p>No results for the current filter(s).</p>
              </>
            )}
          </div>
        ) : (
          splitEvery(props.expenses, 4).map((expensesChunk, index) => (
            <div className='row' key={index}>
              {expensesChunk.map((expense, index) => (
                <div className='col-1-of-4' key={expense.id + index}>
                  <ExpenseListItem key={expense.id} {...expense} />
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesWithoutFilters: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseList);
