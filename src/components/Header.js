import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensus</h1>
        <nav>
            <ul>
                <li><NavLink to='/' activeClassName="is-active" exact>Home</NavLink></li>
                <li><NavLink to='/create' activeClassName="is-active">Add Expense</NavLink></li>                                
            </ul>
        </nav>
    </header>
);

export default Header;