import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import {getStore, setStore,removeStore} from '../config/mUtils';
import axios from 'axios';
import '../service/data/datasource';


const INIT_PRODUCT = "INIT_PRODUCT";

const GET_PRODUCT = "GET_PRODUCT";



const initialState = {
  product: []
}
export function product(state=initialState,action) {
  switch(action.type){
    case INIT_PRODUCT:
    console.log(action.payload)
    return Object.assign({},state,action.payload)
    case  GET_PRODUCT:
    return [...state, action.payload]
      break;
    default:
      return state
  }
}

function initProductList(data) {
  return { type: INIT_PRODUCT, payload: data}
}

function  initProductGet(data) {
  return { type: INIT_PRODUCT, payload: data}
}

export function productList() {
  return dispatch => {
    axios.get('/goods')
         .then(result => {
           console.log(result.data.goods)
            dispatch(initProductList(result.data.goods))
         })
         .catch(error => {
           console.log(error)
         })
  }
}


export function getProduct(id) {
  console.log('getProduct')
  console.log(id)
  return dispatch => {
    axios.get('/goods')
         .then(result=> {
          let product = result.data.goods.find(x=>{ return x.id == id});
            dispatch(initProductGet(product))
         })
         .catch(error => {
            console.log(error);
         })
  }
}


