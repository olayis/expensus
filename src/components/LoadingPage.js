import React from 'react';
import loadingGif from '../../public/img/loading';

const LoadingPage = () => (
  <div className='loader'>
    <div>
      <img src={loadingGif} className='loader__image' />
      <p className='loader__text'>Loading...</p>
    </div>
  </div>
);

export default LoadingPage;
