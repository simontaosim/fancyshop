import history from '../history';
import { MClient } from '../config/asteroid.config.js';


export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILD= "GET_PRODUCT_FAILD";
export const ADD_PRODUCT_COUNT = "ADD_PRODUCT_COUNT";
export const GET_PRODUCTS_SUCCESS= "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILD = "GET_PRODUCTS_FAILD";


function getProductSuccess(product){
  return {
    type: GET_PRODUCT_SUCCESS,
    product,
  }
}

export function addProductCount(num) {
  return {
    type: ADD_PRODUCT_COUNT,
    num,
  }
}

export function getProduct(id){
  return dispatch => {
    MClient.sub("get.product.id", [id]);
    let product = [];
    MClient.connect();
    let methodId = MClient.method("get.oneproduct.id", [id]);

    MClient.on("result", message => {
      if(message.id === methodId && !message.error){
        dispatch(getProductSuccess(message.result));
      }else{
        // dispatch(receiveProductByIdError(message.error));
      }
    })
  }
}