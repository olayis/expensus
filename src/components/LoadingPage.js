import React from 'react';
import spinner from '../../public/img/spinner.gif';

const LoadingPage = (props) => (
  <div className='loader'>
    <div className='loader__content'>
      <img
        src={props.img || spinner}
        className='loader__image'
        alt=''
        width={props.width || '200'}
        height={props.height || '200'}
      />
      {props.hideLoadingText ? '' : <p className='loader__text'>Loading...</p>}
    </div>
  </div>
);

export default LoadingPage;
