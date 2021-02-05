import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import user_avatar from '../../public/img/user-avatar.svg';

export const Navbar = ({
  userInfo,
  sidebarOpen,
  openSidebar,
  closeSidebar,
}) => (
  <>
    <nav className='navbar'>
      <div
        className='navbar__icon'
        onClick={() => openSidebar()}
        aria-label='Expand Sidebar'
      >
        <FontAwesomeIcon icon={faBars} className='fa-icon' />
      </div>
      <div className='navbar__center'>
        <div className='navbar__title'>
          <h1>
            <NavLink to='/dashboard' activeClassName='nav-is-active'>
              Dashboard
            </NavLink>
          </h1>
        </div>
        <div className='navbar__title'>
          <h1>
            <NavLink to='/create' activeClassName='nav-is-active'>
              Add Expense
            </NavLink>
          </h1>
        </div>
        <div className='navbar__title'>
          <h1>
            <NavLink to='/edit' activeClassName='nav-is-active'>
              Edit Expense
            </NavLink>
          </h1>
        </div>
        <div className='navbar__title'>
          <h1>
            <NavLink to='/currency' activeClassName='nav-is-active'>
              Currency
            </NavLink>
          </h1>
        </div>
      </div>
      <div className='navbar__right'>
        <div className='user-info'>
          <div className='user-info__wrapper'>
            <img
              src={userInfo.photoURL || user_avatar}
              alt='User Avatar'
              width='50'
              height='50'
              aria-label='User Avatar'
            />
            <div className='user-info__details'>
              {userInfo.displayName && <p>{userInfo.displayName}</p>}
              {userInfo.email && <p>{userInfo.email}</p>}
              {userInfo.providerId && <p>{userInfo.providerId} Account</p>}
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      className={
        sidebarOpen
          ? 'navbar sidebar__overlay--open'
          : 'sidebar__overlay--close'
      }
      onClick={() => closeSidebar()}
      aria-label='Close Sidebar Overlay'
    ></div>
  </>
);

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo.providerData ? state.userInfo.providerData[0] : {},
  };
};

export default connect(mapStateToProps)(Navbar);
