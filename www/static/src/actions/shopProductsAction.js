import { MClient } from '../config/asteroid.config.js';


export const GET_SHOP_PRODUCTS_SUCCESS = "GET_SHOP_PRODUCTS_SUCCESS";
export const GET_SHOP_PRODUCTS_FAILD = "GET_SHOP_PRODUCTS_FAILD";


function getShopProductsSuccess(products) {
    return {
      type: GET_SHOP_PRODUCTS_SUCCESS,
      products
    }
 }


 export function getShopProducts(shopId,page,pagesize) {
    return dispatch => {
      MClient.method("app.get.shop.products",[shopId])
      MClient.on("result", message => {
        if (message.result.formMethod === 'app.get.shop.products'){
          dispatch(getShopProductsSuccess(message.result.list));
        }
      });
    }   
 }




