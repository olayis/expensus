import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import localeReducer from '../reducers/locale';
import userInfoReducer from '../reducers/userInfo';
import dataReducer from '../reducers/data';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer,
      locale: localeReducer,
      userInfo: userInfoReducer,
      data: dataReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
