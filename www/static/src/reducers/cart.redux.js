import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import {getStore, setStore,removeStore} from '../config/mUtils';


const ADD_CART = "ADD_CART";
const CUT_CART = "CUT_CART";
const REMOVE_CART = "REMOVE_CART";



const initialState = {
  data: [],
}
export function cart(state=initialState,action) {
  switch(action.type){
    case ADD_CART:
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


export function addCart() {
  dispatch => {

  }
}


