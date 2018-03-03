import history from '../history';
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
      MClient.sub('app.get.shop.products',[shopId,page,pagesize]);
      MClient.connect();
      let products = [];
        MClient.on("added", ({collection, id, fields}) => {
          if(collection==='products'){
            if(products.length< pagesize){
              products.push({fields,id})
            }
            dispatch(getShopProductsSuccess(products));
          }
        });
    }   
 }




