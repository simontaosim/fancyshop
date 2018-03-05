import history from '../history';
import { MClient } from '../config/asteroid.config.js';


export const GET_RECOMMAND_PRODUCTS_SUCCESS = 'GET_RECOMMAND_PRODUCTS_SUCCESS';
export const GET_RECOMMAND_PRODUCTS_FAILD = 'GET_RECOMMAND_PRODUCTS_FAILD';
export const GET_PRODUCTS_SUCCESS= "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILD= "GET_PRODUCTS_FAILD";
;


function getRecommandProductsSuccess(products) {
    return {
        type: GET_RECOMMAND_PRODUCTS_SUCCESS,
        products,
    }
}


function getProductsSuccess(products,page) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
    page
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


  export function getProducts(page,pagesize,data=[]) {
    return dispatch => {
      let methodId = MClient.method('app.get.recommend.products',[page,pagesize]);
      MClient.on('result', message => {
        if(message.id === methodId && !message.error){
            dispatch(getProductsSuccess(data.concat(message.result),page))
        }
      })
    }
  }


 