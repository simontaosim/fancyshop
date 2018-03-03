import history from '../history';
import { MClient } from '../config/asteroid.config.js';


export const GET_RECOMMAND_PRODUCTS_SUCCESS = 'GET_RECOMMAND_PRODUCTS_SUCCESS';
export const RECEIVE_RECOMMAND_PRODUCTS = 'RECEIVE_RECOMMAND_PRODUCTS';
export const RECEIVE_PRODUCT_BYID = 'RECEIVE_PRODUCT_BYID';
export const ADD_COUNT = "ADD_COUNT";
export const RECEIVE_SHOP_PRODUCTS_BYSHOPID = "RECEIVE_SHOP_PRODUCTS_BYSHOPID";
export const GET_RECOMMAND_PRODUCTS= "GET_RECOMMAND_PRODUCTS";


function getRecommandProductsSuccess(products) {
    return {
        type: GET_RECOMMAND_PRODUCTS_SUCCESS,
        products,
    }
}


export function getRecommandProducts(page, pagesize){
    return dispatch => {
      const subId =  MClient.sub("home.top.products", [page, pagesize]);
      let products = [];
      MClient.on("ready", message => {
        if (message.subs.includes(subId)) {
            console.log("mySubscription ready");
        }
      });
      MClient.on("added", message => {
        if (message.collection === 'products') {
          if (products.length < pagesize) {
            products.push({fields: message.fields, id: message.id});
            dispatch(getRecommandProductsSuccess(products));
          }
        }
      });
    }
  }