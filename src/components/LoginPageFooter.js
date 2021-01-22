import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const currentYear = new Date().getFullYear();

const LoginPageFooter = () => (
  <div className='login-footer'>
    &copy; {`${currentYear} `}
    <a
      href='https://www.github.com/olayis'
      target='_blank'
      className='login-footer__link'
      aria-label='Olusegun"s Github'
      rel='noreferrer'
    >
      Olayis
    </a>
    . All rights reserved.
    <div className=''>
      <a
        href='https://www.twitter.com/olusegun_os/'
        target='_blank'
        className='login-footer__link'
        aria-label='Olusegun"s Twitter'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faTwitter} className='social-link' />
      </a>
      <a
        href='https://www.github.com/olayis/expensus'
        target='_blank'
        className='login-footer__link'
        aria-label='Expensus"s Github URL'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faGithub} className='social-link' />
      </a>
      <a
        href='mailto:olayinkasegunsolo@gmail.com'
        target='_blank'
        className='login-footer__link'
        aria-label='Olusegun"s Email'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faEnvelopeOpen} className='social-link' />
      </a>
    </div>
  </div>
);

export default LoginPageFooter;
