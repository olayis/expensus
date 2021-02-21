import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';
import ExpenseChart from './ExpenseChart';
import selectExpenses from '../selectors/expenses';

export const ExpensusDashboardPage = (props) => (
  <main className='main-content'>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList
      expenses={props.expenses}
      expensesWithoutFilters={props.expensesWithoutFilters}
    />
    <ExpenseChart
      expenses={props.expenses}
      expensesWithoutFilters={props.expensesWithoutFilters}
    />
  </main>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesWithoutFilters: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpensusDashboardPage);
