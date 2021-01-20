import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div className='layout-container'>
          <Layout />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
