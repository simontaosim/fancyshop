import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const history = createBrowserHistory()

// export const PrivateRoute = ({ isAuthenticated }) => {
//   if (isAuthenticated) {
//     return <Route path='/dashboard' component={DashboardContainer} />
//   } else {
//     return <Redirect to='/login' />
//   }
// }


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


// const PrivateRoute = ({ component: Component, ...rest,authenticated }) => (
//   <Route {...rest} render={props => (
//     authenticate ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )


export default PrivateRoute;