import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {AppInfo} from '../reducers'
import { ordersInfo } from '../reducers/orders.js'
import { currentUser } from '../reducers/users.js'
import CurrentUser from '../reducers/CurrentUser.js'
import AppUser from '../reducers/AppUser.js'
import {user} from '../reducers/user.redux';
import { cart } from '../reducers/cart.redux';
import { productReducer } from '../reducers/product.redux';
import { model } from '../reducers/model.redux';
import { productShow } from '../reducers/product';
import { order } from '../reducers/order';
import { balance } from '../reducers/balance';
import { recommandProducts } from '../reducers/recommand_products';
import { balanceReducer } from '../reducers/balance.reudx';
import { shopProductsReducer } from '../reducers/shop.product.redux';
import { recommandProductsReducer } from '../reducers/products.redux';
import { ProductsReducer } from '../reducers/products.redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk,logger),
    window.devToolsExtension?window.devToolsExtension():f=>f
  );
  return createStore(
    combineReducers({
      AppInfo,
      AppUser,
      recommandProducts,
      currentUser,
      CurrentUser,
      ordersInfo,
      user,
      cart,
      productReducer,
      model,
      productShow,
      order,
      balance,
      balanceReducer,
      shopProductsReducer ,
      recommandProductsReducer,
      ProductsReducer,
    }),
    enhancer);
}
