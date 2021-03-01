import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import store from './store/configureStore';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import configureLocale from './utils/numeralLocale/configureLocale';
import { login, logout } from './actions/auth';
import { userInfo } from './actions/userInfo';
import LoadingPage from './components/LoadingPage';
import splash from '../public/img/splash.gif';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/main.scss';

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(
  <LoadingPage img={splash} width='262' height='98' hideLoadingText={true} />,
  document.getElementById('app')
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(userInfo(user.providerData));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
    configureLocale(store);
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
