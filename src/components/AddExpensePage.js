import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <main className='main-content'>
        <div className='content-container'>
          <div className='add-expense-container'>
            <ExpenseForm onSubmit={this.onSubmit} goBack={this.goBack} />
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
