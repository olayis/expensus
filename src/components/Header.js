import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import user_avatar from '../../public/img/user-avatar.svg';

export const Header = ({
  userInfo,
  sidebarOpen,
  openSidebar,
  closeSidebar,
}) => {
  const { pathname } = useLocation();
  const [, extractFirstPath] = pathname.split('/');
  const formatPathname = extractFirstPath.toUpperCase();

  return (
    <>
      <header className='header'>
        <div
          className='header__icon'
          onClick={() => openSidebar()}
          aria-label='Expand Sidebar'
          role='button'
        >
          <FontAwesomeIcon icon={faBars} className='fa-icon' />
        </div>
        <div className='header__center'>
          <h1 className='header__title'>{formatPathname}</h1>
        </div>
        <div className='header__right'>
          <div className='user-info'>
            <div className='user-info__wrapper'>
              <img
                src={userInfo.photoURL || user_avatar}
                alt={userInfo.displayName}
                width='50'
                height='50'
              />
              <div className='user-info__details'>
                {userInfo.displayName && <p>{userInfo.displayName}</p>}
                {userInfo.email && <p>{userInfo.email}</p>}
                {userInfo.providerId && <p>{userInfo.providerId} Account</p>}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          sidebarOpen
            ? 'header sidebar__overlay--open'
            : 'sidebar__overlay--close'
        }
        onClick={() => closeSidebar()}
        aria-label='Close Sidebar Overlay'
      ></div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userInfo.providerData ? state.userInfo.providerData[0] : {},
    sidebarOpen: ownProps.sidebarOpen,
    openSidebar: ownProps.openSidebar,
    closeSidebar: ownProps.closeSidebar,
  };
};

export default connect(mapStateToProps)(Header);
