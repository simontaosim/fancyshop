import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {AppInfo} from '../reducers'
import {user} from '../reducers/user.redux.js'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
const history = createHistory()
export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(logger,thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(
    combineReducers({
      AppInfo,
      user,
    }),
    initialState,
    enhancer);
}
