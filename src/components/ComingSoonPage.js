import React from 'react';
import { Link } from 'react-router-dom';
import programming from '../../public/img/programming.svg';

const ComingSoonPage = () => (
  <main className='main-content'>
    <div className='content-container'>
      <div className='error'>
        <img
          src={programming}
          alt='Programmer'
          className='error__illustration'
          width='1075'
          height='585'
        />
        <h2 className='error__text'>This page is coming soon.</h2>
        <div className='error__explanation'>
          Continue managing your expenses.
          <span className='error__action'>
            <Link className='btn btn--try-again' to='/'>
              Go Home
            </Link>
          </span>
        </div>
      </div>
    </div>
  </main>
);

export default ComingSoonPage;
