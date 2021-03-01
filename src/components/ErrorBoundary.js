import React from 'react';
import store from '../store/configureStore';
import ErrorPage from './ErrorPage';
import startLogError from '../actions/logError';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    process.env.NODE_ENV === 'Production'
      ? store.dispatch(startLogError(error, errorInfo))
      : '';
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
