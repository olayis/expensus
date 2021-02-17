import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default class CurrencyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: props.currency,
      currencyError: '',
    };
  }

  onCurrencyChange = (e) => {
    const currency = e.target.value;
    this.setState(() => ({ currency }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.currency) {
      this.setState(() => ({
        currencyError: 'Please select a valid currency',
      }));
    } else {
      this.setState(() => ({ currencyError: '' }));
      this.props.onSubmit({
        currency: this.state.currency.trim(),
      });
    }
  };

  render() {
    return (
      <form className='input-field' onSubmit={this.onSubmit}>
        <div className='input-field__wrapper'>
          <select
            className='dropdown dropdown--currency'
            value={this.state.currency}
            onChange={this.onCurrencyChange}
            aria-label='Select Currency'
            name='currency'
          >
            <option value=''>-- Select Currency --</option>
            <option value='Baht'>Baht (฿)</option>
            <option value='Danish Krone'>Danish Krone (DKK)</option>
            <option value='Dollar'>Dollar ($)</option>
            <option value='Dong'>Dong (₫)</option>
            <option value='Euro'>Euro (€)</option>
            <option value='Forint'>Forint (Ft)</option>
            <option value='Hryvnia'>Hryvnia (₴)</option>
            <option value='Koruna'>Koruna (Kč)</option>
            <option value='Lira'>Lira (₺)</option>
            <option value='Lev'>Lev (лв)</option>
            <option value='Naira'>Naira (₦)</option>
            <option value='Norwegian krone'>Norwegian krone (kr)</option>
            <option value='Pound Sterling'>Pound Sterling (£)</option>
            <option value='Rand'>Rand (R)</option>
            <option value='Real'>Real (R$)</option>
            <option value='Ruble'>Ruble (₽)</option>
            <option value='Swiss Franc'>Swiss Franc (CHF)</option>
            <option value='Yen'>Yen (¥)</option>
            <option value='Yuan'>Yuan (¥)</option>
            <option value='Zloty'>Złoty (PLN)</option>
          </select>
          {this.state.currencyError && (
            <span className='input-field__error-msg'>
              <FontAwesomeIcon className='fa-icon' icon={faExclamationCircle} />
              {this.state.currencyError}
            </span>
          )}
        </div>
        <button className='btn btn-currency'>Change Currency</button>
      </form>
    );
  }
}
