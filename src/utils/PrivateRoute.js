import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={ props =>
        isAuthenticated === true
        ? <Component {...props} />
        : <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
      }
    />
  )
}

export default PrivateRoute