import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import NoExpense from './NoExpense';
import access_denied from '../../public/img/access_denied.svg';
import ExpensusDataDownload from './ExpensusDataDownload';
import ExpensusDataDelete from './ExpensusDataDelete';

export const ExpensusData = (props) => {
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <main className='main-content'>
      <div className='content-container'>
        <span className='input-field__back' onClick={goBack}>
          &#8592;
        </span>
        {props.expenses.length === 0 ? (
          <div className='component-container'>
            <NoExpense
              expensesWithoutFilters={props.expensesWithoutFilters}
              noDataImage={access_denied}
              noDataImageAlt='A man illustrating access denied'
              filterImage={access_denied}
              filterImageAlt='A man illustrating access denied'
              noExpenseText='There are currently no expenses to download.'
            />
          </div>
        ) : (
          <>
            <div className='component-container'>
              <ExpensusDataDownload expenses={props.expenses} />
            </div>
            <div className='component-container margin-top-md'>
              <ExpensusDataDelete />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesWithoutFilters: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpensusData);
