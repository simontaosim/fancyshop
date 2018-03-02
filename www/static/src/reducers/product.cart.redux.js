import { MClient } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import axios from 'axios';
import '../service/data/datasource';


const INIT_PRODUCT = "INIT_PRODUCT";

const GET_PRODUCT = "GET_PRODUCT";


const CHANGE_PRODUCT = "CHANGE_PRODUCT";


const ADD_COUNT = "ADD_COUNT";



const initialState = {
}
export function product(state=initialState,action) {
  switch(action.type){
    case INIT_PRODUCT:
    console.log(action.payload)
      return Object.assign({},state,action.payload,{})
      break;
    case  GET_PRODUCT:
      return Object.assign({},state,action.payload)
      break;
    case CHANGE_PRODUCT:
      let index = action.payload;
      let good_spec = state.good.spec
      for(var i=0;i< good_spec.length;i++){
        good_spec[i].isThis = false;
        good_spec[index].isThis=true
      }
      return Object.assign({},state,{selected: good_spec[index]})
      break;
    // case ADD_COUNT:
    //   return Object.assign({},state,{count: action.payload})
    //   break;
    default: 
      return state
  }
}

function initProductList(data) {
  return { type: INIT_PRODUCT, payload: data}
}

function  initProductGet(data) {
  return { type: GET_PRODUCT, payload: data}
}

export function changeProduct(data) {
  return { type: CHANGE_PRODUCT, payload: data}
}



//获取商品列表
export function productList() {
  return dispatch => {
    axios.get('/products')
         .then(result => {
            dispatch(initProductList(result.data))
         })
         .catch(error => {
           console.log(error)
         })
  }
}

//获取商品详情
export function getProduct(id) {
  return dispatch => {
    axios.get('/products')
         .then(result=> {
          let product = result.data.goods.find(x=>{ return x.id == id});
            dispatch(initProductGet({'good':product}))
         })
         .catch(error => {
            console.log(error);
         })
  }
}




