import React from 'react';
import { Link } from 'react-router-dom';
import not_found from '../../public/img/not_found';

const NotFoundPage = () => (
  <div>
    <img src={not_found} alt='Lady illustrating not found page.' />
    <h2>Page Not Found.</h2>
    <p>
      Sorry, but the page you were trying to view does not exist. Let's &mdash;{' '}
      <Link to='/'>Go home</Link>
    </p>
  </div>
);

export default NotFoundPage;
