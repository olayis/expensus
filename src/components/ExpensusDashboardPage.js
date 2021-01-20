import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';
import ExpensesCharts from '../components/ExpensesCharts';

const ExpensusDashboardPage = () => (
  <div className='main-content'>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesCharts />
  </div>
);

export default ExpensusDashboardPage;
