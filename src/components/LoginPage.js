import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TypeIt from 'typeit-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faTwitter,
  faFacebookF,
  faYahoo,
} from '@fortawesome/free-brands-svg-icons';
import randomQuote from '../utils/budgetQuotes/quotes';
import expensus_logo from '../../public/img/expensus-blue.svg';
import {
  startGoogleLogin,
  startFacebookLogin,
  startTwitterLogin,
  startYahooLogin,
} from '../actions/auth';
import Footer from './Footer';

const { quote, author } = randomQuote();

export const LoginPage = ({
  startGoogleLogin,
  startFacebookLogin,
  startTwitterLogin,
  startYahooLogin,
}) => (
  <div className='split-layout'>
    <div className='split-layout__left'>
      <div className='login-content'>
        <div className='login-content__logo-box'>
          <Link to='/'>
            <img
              src={expensus_logo}
              alt='Expensus Logo'
              className='login-content__logo'
              width='195'
              height='37'
            />
          </Link>
        </div>
        <h1 className='login-content__message'>
          Hi! Sign in to start managing your expenses.
        </h1>
        <button
          onClick={startGoogleLogin}
          className='btn btn__login btn__login--google'
        >
          <FontAwesomeIcon icon={faGoogle} /> <h2>Continue with Google</h2>
        </button>
        <button
          onClick={startFacebookLogin}
          className='btn btn__login btn__login--facebook'
        >
          <FontAwesomeIcon icon={faFacebookF} /> <h2>Continue with Facebook</h2>
        </button>
        <button
          onClick={startTwitterLogin}
          className='btn btn__login btn__login--twitter'
        >
          <FontAwesomeIcon icon={faTwitter} /> <h2>Continue with Twitter</h2>
        </button>
        <button
          onClick={startYahooLogin}
          className='btn btn__login btn__login--yahoo'
        >
          <FontAwesomeIcon icon={faYahoo} /> <h2>Continue with Yahoo</h2>
        </button>
      </div>
      <Footer />
    </div>
    <div className='split-layout__right'>
      <div className='quotes'>
        <TypeIt>
          <span className='quotes--text'>“{quote}"</span>
          <br />
          <span className='quotes--author'>&mdash; {author}</span>
        </TypeIt>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
  startTwitterLogin: () => dispatch(startTwitterLogin()),
  startYahooLogin: () => dispatch(startYahooLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
