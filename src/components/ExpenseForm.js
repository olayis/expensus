import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      category: props.expense ? props.expense.category : 'Uncategorized',
      calendarFocused: false,
      amountError: '',
      descriptionError: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description, descriptionError: '' }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      /* Ensure amount is lesser than Number.MAX_SAFE_INTEGER (2^53 - 1)
       ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
       */
      amount <= 9007199254740991
        ? this.setState(() => ({ amount, amountError: '' }))
        : this.setState(() => ({
            amountError:
              'Amount should not be greater than 9,007,199,254,740,990 or ~9 quadrillion',
          }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description && !this.state.amount) {
      this.setState(() => ({
        amountError: 'Please provide an amount',
        descriptionError: 'Please provide a description',
      }));
    } else if (!this.state.description.trim()) {
      this.setState(() => ({
        amountError: '',
        descriptionError: 'Please provide a description.',
      }));
    } else if (!this.state.amount) {
      this.setState(() => ({
        amountError: 'Please provide an amount.',
        descriptionError: '',
      }));
    } else {
      this.setState(() => ({ descriptionError: '', amountError: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        category: this.state.category,
      });
    }
  };

  render() {
    return (
      <form className='input-field' onSubmit={this.onSubmit}>
        <span className='input-field__back' onClick={this.props.goBack}>
          &#8592;
        </span>
        <div className='input-field__wrapper'>
          <input
            className={
              'text-input text-input--form ' +
              (this.state.descriptionError ? 'input-field--has-error' : '')
            }
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            aria-label='Expense description'
            name='description'
          />
          <span
            className={
              'input-field__helper ' +
              (this.state.description ? 'input-field--has-value' : '')
            }
          >
            Description
          </span>
          {this.state.descriptionError && (
            <span className='input-field__error-msg'>
              <FontAwesomeIcon className='fa-icon' icon={faExclamationCircle} />
              {this.state.descriptionError}
            </span>
          )}
        </div>
        <div className='input-field__wrapper'>
          <input
            className={
              'text-input text-input--form ' +
              (this.state.amountError ? 'input-field--has-error' : '')
            }
            type='number'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
            aria-label='Expense amount'
            name='amount'
            step='any'
          />
          <span
            className={
              'input-field__helper ' +
              (this.state.amount ? 'input-field--has-value' : '')
            }
          >
            Amount
          </span>
          {this.state.amountError && (
            <span className='input-field__error-msg'>
              <FontAwesomeIcon className='fa-icon' icon={faExclamationCircle} />
              {this.state.amountError}
            </span>
          )}
        </div>
        <div className='input-field__wrapper text-input--form'>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            id='unique_date_id'
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
        <div className='input-field__wrapper'>
          <select
            className='dropdown dropdown--category'
            value={this.state.category}
            onChange={this.onCategoryChange}
            aria-label='Select category'
            name='category'
          >
            <option value='Uncategorized'>Uncategorized</option>
            <option value='Bills & Utilities'>Bills & Utilities</option>
            <option value='Debt'>Debt</option>
            <option value='Education'>Education</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Family & Friends'>Family & Friends</option>
            <option value='Gadgets'>Gadgets</option>
            <option value='Health'>Health</option>
            <option value='Housing'>Housing</option>
            <option value='Maintenance'>Maintenance</option>
            <option value='Meals/Food Items'>Meals/Food Items</option>
            <option value='Rent'>Rent</option>
            <option value='Savings & Investments'>Savings & Investments</option>
            <option value='Shopping'>Shopping</option>
            <option value='Taxes'>Taxes</option>
            <option value='Transportation'>Transportation</option>
            <option value='Travel'>Travel</option>
          </select>
        </div>
        <div className='input-field__wrapper'>
          <textarea
            className='textarea textarea--form'
            placeholder='Add a note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
            aria-label='Expense note'
            name='note'
          ></textarea>
          <span className='input-field__helper'>Note</span>
        </div>
        <button className='btn btn-add-expense btn-add-expense--form'>
          Add Expense
        </button>
      </form>
    );
  }
}
