import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/exepenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
