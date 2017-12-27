import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {AppInfo} from '../reducers'
import {user} from '../reducers/user.redux.js'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
const history = createHistory()
const middleware = routerMiddleware(history)
export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(middleware,thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(
    combineReducers({
      AppInfo,
      user,
      router: routerReducer
    }),
    initialState,
    enhancer);
}
