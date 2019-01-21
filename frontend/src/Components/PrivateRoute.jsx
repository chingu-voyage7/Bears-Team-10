import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  isLoading,
  ...rest
}) => {
  return isLoading ? (
    ''
  ) : isLoggedIn ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  );
};

export default PrivateRoute;
