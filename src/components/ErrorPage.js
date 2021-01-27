import React from 'react';
import { Link } from 'react-router-dom';
import engineer from '../../public/img/QA-Engineer.svg';

const NotFoundPage = () => (
  <div className='content-container'>
    <div className='error'>
      <img
        src={engineer}
        alt='Image showing an Engineer'
        className='error__illustration'
        width='1075'
        height='585'
      />
      <h2 className='error__text'>Oops! Something went wrong.</h2>
      <div className='error__explanation'>
        Click here to try again.
        <span className='error__action'>
          <Link className='btn btn--try-again' to='/'>
            Try Again
          </Link>
        </span>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
