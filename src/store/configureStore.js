import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import localeReducer from '../reducers/locale';
import userInfoReducer from '../reducers/userInfo';
import authErrorReducer from '../reducers/authErrors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const reduxStore = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer,
      locale: localeReducer,
      userInfo: userInfoReducer,
      authErrors: authErrorReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return reduxStore;
};

const store = configureStore();
export default store;
