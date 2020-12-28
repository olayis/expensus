import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensus</h1>
    <nav>
      <ul>
        <li>
          <NavLink to='/dashboard' activeClassName='is-active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/create' activeClassName='is-active'>
            Add Expense
          </NavLink>
        </li>
        <li>
          <button onClick={startLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
