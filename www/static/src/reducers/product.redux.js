import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';
import {getStore, setStore,removeStore} from '../config/mUtils';
import axios from 'axios';
import '../service/data/datasource';



const GET_PRODUCT = "GET_PRODUCT";



const initialState = {
  product: [],
}
export function product(state=initialState,action) {
  switch(action.type){
    case  GET_PRODUCT:
      break;
    default:
      return state
  }
}

function addCartSuccess(data) {
  return { type: GET_PRODUCT, payload: data}
}


export function getProduct(id) {
  console.log('getProduct')
  console.log(id)
  return dispatch => {
    axios.get('/goods')
         .then(result=> {
          let product = result.data.goods.find(x=>{ return x.id == id});
           console.log(`result`);
           console.log(id);
           console.log(result);

            console.log(product);
         })
         .catch(error => {
            console.log(error);
         })
  }
}


