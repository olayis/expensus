import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <main className='main-content'>
        <div className='content-container'>
          <div className='edit-expense-container'>
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
              goBack={this.goBack}
            />
            <button
              onClick={this.onRemove}
              className='btn btn-remove-expense btn-remove-expense--form'
            >
              Remove
            </button>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
