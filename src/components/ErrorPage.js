import React from 'react';
import { history } from '../routers/AppRouter';
import engineer from '../../public/img/QA-Engineer.svg';

const ErrorPage = () => (
  <div className='content-container'>
    <div className='error'>
      <img
        src={engineer}
        alt='A Quality Assurance Engineer'
        className='error__illustration'
        width='1075'
        height='585'
      />
      <h2 className='error__text'>Oops! Something went wrong.</h2>
      <div className='error__explanation'>
        Click here to try again.
        <span className='error__action'>
          <button className='btn btn--try-again' onClick={() => history.go(0)}>
            Try Again
          </button>
        </span>
      </div>
    </div>
  </div>
);

export default ErrorPage;
