import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LayoutLoadingPage from '../components/LayoutLoadingPage';
import ErrorBoundary from '../components/ErrorBoundary';
import logEvent from '../actions/logEvent';

const ExpensusDashboardPage = lazy(() =>
  import('../components/ExpensusDashboardPage')
);
const AddExpensePage = lazy(() => import('../components/AddExpensePage'));
const EditExpensePage = lazy(() => import('../components/EditExpensePage'));
const NotFoundPage = lazy(() => import('../components/NotFoundPage'));
const LoginPage = lazy(() => import('../components/LoginPage'));
const ExpensusData = lazy(() => import('../components/ExpensusData'));
const ChangeCurrency = lazy(() => import('../components/ChangeCurrency'));
const ComingSoonPage = lazy(() => import('../components/ComingSoonPage'));

export const history = createHistory();

history.listen((location) => {
  logEvent('page_view', { page: location.pathname });
});

const AppRouter = () => (
  <Router history={history}>
    <div>
      <ErrorBoundary>
        <Suspense fallback={<LayoutLoadingPage />}>
          <Switch>
            <PublicRoute path='/' component={LoginPage} exact />
            <PrivateRoute path='/dashboard' component={ExpensusDashboardPage} />
            <PrivateRoute path='/create' component={AddExpensePage} />
            <PrivateRoute path='/edit/:id' component={EditExpensePage} />
            <PrivateRoute path='/data' component={ExpensusData} />
            <PrivateRoute path='/currency' component={ChangeCurrency} />
            <PrivateRoute path='/settings' component={ComingSoonPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  </Router>
);

export default AppRouter;
