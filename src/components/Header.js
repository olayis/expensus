import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import user_avatar from '../../public/img/user-avatar.svg';

export const Header = ({
  userInfo,
  sidebarOpen,
  openSidebar,
  closeSidebar,
}) => (
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
        <div className='header__title'>
          <h1>
            <NavLink to='/dashboard' activeClassName='nav-is-active'>
              Dashboard
            </NavLink>
            <NavLink to='/create' activeClassName='nav-is-active'>
              Add Expense
            </NavLink>
            <NavLink to='/edit' activeClassName='nav-is-active'>
              Edit Expense
            </NavLink>
            <NavLink to='/currency' activeClassName='nav-is-active'>
              Currency
            </NavLink>
            <NavLink to='/data' activeClassName='nav-is-active'>
              Data
            </NavLink>
          </h1>
        </div>
      </div>
      <div className='header__right'>
        <div className='user-info'>
          <div className='user-info__wrapper'>
            <img
              src={userInfo.photoURL || user_avatar}
              alt='User Avatar'
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

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.userInfo.providerData ? state.userInfo.providerData[0] : {},
    sidebarOpen: ownProps.sidebarOpen,
    openSidebar: ownProps.openSidebar,
    closeSidebar: ownProps.closeSidebar,
  };
};

export default connect(mapStateToProps)(Header);
