import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './Users/AuthContext'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={props =>
          isAuth ? <Component {...props} /> : <Redirect to="/" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
)

export default PrivateRoute