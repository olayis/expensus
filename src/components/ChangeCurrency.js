import React from 'react';
import { connect } from 'react-redux';
import { startChangeLocale } from '../actions/locale';
import CurrencyForm from './CurrencyForm';

export class ChangeCurrency extends React.Component {
  onSubmit = ({ currency }) => {
    this.props.startChangeLocale({ currency });
    this.props.history.push('/');
    this.props.history.go(0);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <main className='main-content'>
        <div className='content-container'>
          <div className='component-container component-container--currency'>
            <CurrencyForm
              onSubmit={this.onSubmit}
              currency={this.props.currency}
              goBack={this.goBack}
            />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.locale ? state.locale.currency : '',
});

const mapDispatchToProps = (dispatch) => ({
  startChangeLocale: (currency) => dispatch(startChangeLocale(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCurrency);
