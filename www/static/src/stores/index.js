import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {AppInfo} from '../reducers'
export default function configureStore(initialState) {
  const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(
    combineReducers({
      AppInfo,
    }),
    initialState,
    enhancer);
}
