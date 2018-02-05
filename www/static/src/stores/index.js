import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {AppInfo} from '../reducers'
import { ordersInfo } from '../reducers/orders.js'
import { currentUser } from '../reducers/users.js'
import CurrentUser from '../reducers/CurrentUser.js'
import {user} from '../reducers/user.redux';
import { cart } from '../reducers/cart.redux';
import { product } from '../reducers/product.redux';
import { model } from '../reducers/model.redux';
import { productShow } from '../reducers/product';
import { order } from '../reducers/order'
import { recommandProducts } from '../reducers/recommand_products';
import thunk from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'
// import logger from 'redux-logger'
// const history = createHistory()
// import history from './history';
export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(
    combineReducers({
      AppInfo,
      recommandProducts,
      currentUser,
      CurrentUser,
      ordersInfo,
      user,
      cart,
      product,
      model,
      productShow,
      order,
    }),
    enhancer);
}
