import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import ExpenseListItem from './ExpenseListItem';
import NoExpense from './NoExpense';
import splitEvery from '../utils/helpers/splitEvery';
import no_data from '../../public/img/no_data.svg';
import filter from '../../public/img/filter.svg';

const ExpenseList = (props) => {
  return (
    <section className='content-container'>
      <div className='component-container'>
        <h2 className='heading-secondary'>
          <FontAwesomeIcon icon={faEye} /> Expenses Overview
        </h2>
        {props.expenses.length === 0 ? (
          <NoExpense
            expensesWithoutFilters={props.expensesWithoutFilters}
            noDataImage={no_data}
            noDataImageAlt='A clipboard showing no data'
            filterImage={filter}
            filterImageAlt='A filter showing Expenses have been filtered'
            noExpenseText='No Expenses To Display.'
          />
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
