import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/exepenses-total';

export const ExpensesSummary = ({
  expenseCount,
  expensesTotal,
  hiddenExpenses,
}) => {
  const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const filterExpenseWord = hiddenExpenses === 1 ? 'expense' : 'expenses';

  return (
    <div className='content-container'>
      <div className='summary'>
        <div className='summary__word'>
          <span className='summary--top'>Viewing</span>
          <br />
          <span className='summary--bottom'>
            {expenseCount} {expenseWord}
          </span>
        </div>
        <div className='summary__amount'>
          <span className='summary--top'>Total</span>
          <br />
          <span className='summary--bottom'>{formattedExpensesTotal}</span>
        </div>
        <div className='summary__button'>
          <Link to='/create' className='btn-add-expense btn-add-expense--cta'>
            Add Expense
          </Link>
        </div>
        {hiddenExpenses ? (
          <div className='summary__hidden'>
            <FontAwesomeIcon className='fa-icon' icon={faExclamationCircle} />
            {hiddenExpenses} {filterExpenseWord} hidden due to filters.
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const hiddenExpenses = state.expenses.length - visibleExpenses.length;

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    hiddenExpenses,
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
