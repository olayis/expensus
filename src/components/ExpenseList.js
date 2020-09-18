import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
// import blank_canvas from '../../public/img/blank_canvas';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <div>
                    {/* <img src={blank_canvas} alt="Lady looking at blank canvas" /> */}
                    <p>No Expenses To Display.</p>
                </div>
            ) : (
                    props.expenses.map((expense) => (
                        <ExpenseListItem
                            key={expense.id}
                            {...expense}
                        />
                    ))
                )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);