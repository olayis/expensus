import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoadingPage from '../components/LoadingPage';

// const ExpensusDashboardPage = lazy(() =>
//   import('../components/ExpensusDashboardPage')
// );
// const AddExpensePage = lazy(() => import('../components/AddExpensePage'));
// const EditExpensePage = lazy(() => import('../components/EditExpensePage'));
// const NotFoundPage = lazy(() => import('../components/NotFoundPage'));
// const LoginPage = lazy(() => import('../components/LoginPage'));
// const ExpensesData = lazy(() => import('../components/ExpensesData'));

import ExpensusDashboardPage from '../components/ExpensusDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import ExpensesData from '../components/ExpensesData';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <PublicRoute path='/' component={LoginPage} exact />
          <PrivateRoute path='/dashboard' component={ExpensusDashboardPage} />
          <PrivateRoute path='/create' component={AddExpensePage} />
          <PrivateRoute path='/edit/:id' component={EditExpensePage} />
          <PrivateRoute path='/data' component={ExpensesData} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  </Router>
);

export default AppRouter;
