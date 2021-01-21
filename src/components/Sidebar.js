import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlusCircle,
  faSignOutAlt,
  faCog,
  faTimes,
  faFileDownload,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import expensus_round from '../../public/img/expensus-round.svg';
import { startLogout } from '../actions/auth';

export const Sidebar = ({ startLogout, sidebarOpen, closeSidebar }) => (
  <aside className={sidebarOpen ? 'sidebar--responsive' : ''} id='sidebar'>
    <div className='sidebar__logo'>
      <Link to='/dashboard' className='dashboard-link'>
        <img
          src={expensus_round}
          alt='Expensus Logo'
          className='sidebar__logo-img'
        />
        <span className='sidebar__expensus'>Expensus</span>
      </Link>
      <span className='sidebar__close'>
        <FontAwesomeIcon
          icon={faTimes}
          className='fa-icon'
          onClick={() => closeSidebar()}
        />
      </span>
    </div>
    <nav className='sidebar__navigation'>
      <ul className='sidebar__navigation--main'>
        <li className='sidebar__link'>
          <NavLink to='/dashboard' activeClassName='is-active'>
            <FontAwesomeIcon icon={faHome} className='fa-icon' /> Home
          </NavLink>
        </li>
        <li className='sidebar__link'>
          <NavLink to='/create' activeClassName='is-active'>
            <FontAwesomeIcon icon={faPlusCircle} className='fa-icon' /> Add
            Expense
          </NavLink>
        </li>
        <li className='sidebar__link'>
          <NavLink to='/currency' activeClassName='is-active'>
            <FontAwesomeIcon icon={faCoins} className='fa-icon' /> Currency
          </NavLink>
        </li>
        <li className='sidebar__link'>
          <NavLink to='/data' activeClassName='is-active'>
            <FontAwesomeIcon icon={faFileDownload} className='fa-icon' /> Data
          </NavLink>
        </li>
        <li className='sidebar__link'>
          <NavLink to='/settings' activeClassName='is-active'>
            <FontAwesomeIcon icon={faCog} className='fa-icon' /> Settings
          </NavLink>
        </li>
      </ul>
      <ul className='sidebar__navigation--sub'>
        <li className='sidebar__link sidebar__signOut'>
          <button onClick={startLogout} className='btn btn__signOut'>
            <FontAwesomeIcon icon={faSignOutAlt} className='fa-icon' /> Logout
          </button>
        </li>
      </ul>
    </nav>
  </aside>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Sidebar);
