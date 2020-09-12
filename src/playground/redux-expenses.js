import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',    
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',    
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        case 'REMOVE_EXPENSE':
            return (
                state.filter(({ id }) => id !== action.id)
            );

        default:
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return ({
                ...state,
                text: action.text
            });
        
        case 'SORT_BY_DATE':
            return ({
                ...state,
                sortBy: 'date'
            });

        case 'SORT_BY_AMOUNT':
            return ({
                ...state,
                sortBy: 'amount'
            });

        case 'SET_START_DATE':
            return ({
                ...state,
                startDate: action.startDate
            });

        case 'SET_END_DATE':
            return ({
                ...state,
                endDate: action.endDate
            });

        default:
            return state;
    }
};

// Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {                
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1;
        }
    });
};

// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Subscription', amount: 50000, createdAt: -31000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Rent', amount: 2000, note: "Full year", createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300, description: 'New Item' }));

// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'fshvghjsdj',
        description: 'Data Subscription',
        note: 'Data subscription for the month of June',
        amount: 50000,
        createdAt: 0
    }],
    filters: {
        text: 'subscription',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Henry',
    age: 20
};

console.log({
    age: 44,
    ...user,
    location: 'Lagos'
});