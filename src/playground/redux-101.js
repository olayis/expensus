import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const multiplyCount = ({ multiplyBy = 1 } = {}) => ({
    type: 'MULTIPLY',
    multiplyBy
});

/*  ------------------------------ REDUCERS ------------------------------------
    1. Reducers are pure functions - Pure functions are functions that accept 
       an input and returns a value without modifying any data outside its scope(Side Effects). 
       Its output or return value must depend on the input/arguments and pure 
       functions must return a value.

    2. Never change state or action
*/

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };

        case 'MULTIPLY':
            return {
                count: state.count * action.multiplyBy
            }

        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 5000 }));

store.dispatch(multiplyCount());

store.dispatch(multiplyCount({ multiplyBy: 3 }))