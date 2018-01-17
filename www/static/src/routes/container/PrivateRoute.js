import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const history = createBrowserHistory()




const PrivateRoute = ({ component: Component, exact = false, path, authenticated }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      authenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/tablogin',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);





export default PrivateRoute;
