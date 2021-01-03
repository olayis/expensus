import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TypeIt from 'typeit-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import randomQuote from '../utils/budgetQuotes/quotes';
import expensus_logo from '../../public/img/expensus-blue';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';
import LoginPageFooter from './LoginPageFooter';

const { quote, author } = randomQuote();

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
  <div className='split-layout'>
    <div className='split-layout__left'>
      <div className='login-content'>
        <div className='login-content__logo-box'>
          <Link to='/'>
            <img
              src={expensus_logo}
              alt='Expensus Logo'
              className='login-content__logo'
            />
          </Link>
        </div>
        <p className='login-content__message'>
          Hi! Sign in to start managing your expenses.
        </p>
        <button
          onClick={startGoogleLogin}
          className='btn btn__login btn__login--google'
        >
          <FontAwesomeIcon icon={faGoogle} /> Continue with Google
        </button>
        <button
          onClick={startFacebookLogin}
          className='btn btn__login btn__login--facebook'
        >
          <FontAwesomeIcon icon={faFacebookF} /> Continue with Facebook
        </button>
        <button
          onClick={startGoogleLogin}
          className='btn btn__login btn__login--twitter'
        >
          <FontAwesomeIcon icon={faTwitter} /> Continue with Twitter
        </button>
        <button
          onClick={startGoogleLogin}
          className='btn btn__login btn__login--email'
        >
          <FontAwesomeIcon icon={faEnvelope} /> Sign Up with Email
        </button>
      </div>
      <LoginPageFooter />
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
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
