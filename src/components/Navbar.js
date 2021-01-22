import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import user_avatar from '../../public/img/user-avatar.svg';

export const Navbar = ({ sidebarOpen, openSidebar }) => (
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
          <NavLink to='/settings' activeClassName='nav-is-active'>
            Settings
          </NavLink>
        </h1>
      </div>
    </div>
    <div className='navbar__right'>
      <div className='user__wrapper'>
        <span className='username'>Username</span>
        <img src={user_avatar} alt='User Avatar' width='50' height='50' />
      </div>
    </div>
  </nav>
);

export default Navbar;
