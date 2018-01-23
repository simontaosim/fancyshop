import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';



const ADD_CART = "ADD_CART";
const CUT_CART = "CUT_CART";
const REMOVE_CART = "REMOVE_CART";



const initialState = {
  products: []
}
export function cart(state=initialState,action) {
  switch(action.type){
    case ADD_CART:
    return Object.assign({},state,{status: true})
      break;
    case CUT_CART:
      break;
    case REMOVE_CART:
      break;
    default:
      return state
  }
}

function addCartSuccess(data) {
  return { type: ADD_CART, payload: data}
}


export function addCart(product) {
  return dispatch => {
    console.log(product);
      asteroid.call('shop_carts.add_cart',product)
              .then(result => {
                  dispatch(addCartSuccess(result))
              })
              .catch(error => {

              })
  }
}


