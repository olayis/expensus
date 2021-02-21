import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import ExpenseListItem from './ExpenseListItem';
import NoExpense from './NoExpense';
import splitEvery from '../utils/helpers/splitEvery';

const ExpenseList = (props) => {
  return (
    <section className='content-container'>
      <div className='component-container'>
        <h2 className='heading-secondary'>
          <FontAwesomeIcon icon={faEye} /> Expenses Overview
        </h2>
        {props.expenses.length === 0 ? (
          <NoExpense expensesWithoutFilters={props.expensesWithoutFilters} />
        ) : (
          splitEvery(props.expenses, 4).map((expensesChunk) => (
            <div className='row' key={expensesChunk[0].id}>
              {expensesChunk.map((expense, index) => (
                <div className='col-1-of-4' key={expense.id + index}>
                  <ExpenseListItem {...expense} />
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ExpenseList;
