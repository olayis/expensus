import React from 'react';
import loadingGif from '../../public/img/loading.gif';

const LoadingPage = () => (
  <div className='loader'>
    <div className='loader__content'>
      <img
        src={loadingGif}
        className='loader__image'
        alt=''
        width='47'
        height='47'
      />
      <p className='loader__text'>Loading...</p>
    </div>
  </div>
);

export default LoadingPage;
