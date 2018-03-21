import {GET_ALL_ORDERS, GET_PAID_ORDERS, GET_UNPAID_ORDERS, GET_SHOP_NAME,GET_CANCEL_ORDERS} from '../actions/orders.js'


const initialState = {
  orders: []
}
export function ordersInfo(state = initialState,action){
  switch (action.type){
    case GET_ALL_ORDERS:
    return Object.assign({}, state, {
      orders: action.orders,
    })
    case GET_PAID_ORDERS:
    return Object.assign({}, state, {
      orders: action.orders,
    })
    case GET_UNPAID_ORDERS:
    return Object.assign({}, state, {
      orders: action.orders,
    })
    case GET_CANCEL_ORDERS:
    return Object.assign({}, state, {
      orders: action.orders,
    })
    case GET_SHOP_NAME:
    return Object.assign({}, state, {
      shopName: action.shopName
    })
    default:
    return state
  }
}
