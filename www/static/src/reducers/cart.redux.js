import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import {getStore, setStore,removeStore} from '../config/mUtils';


const ADD_CART = "ADD_CART";
const CUT_CART = "CUT_CART";

export function card(state={},action) {
  switch(action.type){
    case ADD_CART:
      break;
    case CUT_CART:
      break;
    default:
      return state
  }
}