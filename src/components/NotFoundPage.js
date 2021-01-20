import React from 'react';
import { Link } from 'react-router-dom';
import not_found from '../../public/img/not_found.svg';

const NotFoundPage = () => (
  <div className='content-container'>
    <div className='not-found'>
      <img
        src={not_found}
        alt='Lady illustrating not found page.'
        className='not-found__illustration'
      />
      <h2 className='not-found__text'>Page Not Found.</h2>
      <p className='not-found__explanation'>
        Sorry, but the page you were trying to view does not exist. Let's
        &mdash;{' '}
        <Link className='router-link router-link--home' to='/'>
          Go home
        </Link>
      </p>
    </div>
  </div>
);

export default NotFoundPage;
