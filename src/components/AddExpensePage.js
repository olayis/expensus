import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { startChangeCurrency } from '../actions/locale';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.startChangeCurrency({ currency: 'Danish Krone' });
    this.props.history.push('/');
  };
  render() {
    return (
      <main className='main-content'>
        <div className='content-container'>
          <div className='add-expense-container'>
            <ExpenseForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  startChangeCurrency: (currency) => dispatch(startChangeCurrency(currency)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
