import history from '../history';
import { MClient } from '../config/asteroid.config.js';
import { product } from '../reducers/product.redux';


export const EXCEPT_RECOMMAND_PRODUCTS = 'EXCEPT_RECOMMAND_PRODUCTS';
export const RECEIVE_RECOMMAND_PRODUCTS = 'RECEIVE_RECOMMAND_PRODUCTS';
export const RECEIVE_PRODUCT_BYID = 'RECEIVE_PRODUCT_BYID';
export const ADD_COUNT = "ADD_COUNT";
export const RECEIVE_SHOP_PRODUCTS_BYSHOPID = "RECEIVE_SHOP_PRODUCTS_BYSHOPID";
export const GET_RECOMMAND_PRODUCTS= "GET_RECOMMAND_PRODUCTS"

// export const RECOMMAND_PRODUCTS_LIST = "RECOMMAND_PRODUCTS_LIST"


function exceptRecommandProduct(){
  return {
    type: EXCEPT_RECOMMAND_PRODUCTS,
    text: '加载中',
  }
}

function receiveRecommandProduct(products){
  return {
    type: RECEIVE_RECOMMAND_PRODUCTS,
    products,
  }
}


export function loadRecommandProducts(page, pagesize){
  return dispatch => {
    dispatch(exceptRecommandProduct());
    MClient.sub("home.top.products", page, pagesize);
    let products = [];
    MClient.connect();
    MClient.on("added", ({collection, id, fields}) => {
      if (collection === 'products') {
        if (products.length < pagesize) {
          products.push({fields, id});
          dispatch(receiveRecommandProduct(products));
        }
      }

    });
  }
}

function exceptProductById(id){

}

function getRecommandProducts(products){
  return {
    type: GET_RECOMMAND_PRODUCTS,
    products
  }
}


function receiveProductById(product){
  return {
    type: RECEIVE_PRODUCT_BYID,
    product,
  }

}
function receiveProductByIdError(error){

}

function receiveShopProductsByShopId(products) {
  return {
    type: RECEIVE_SHOP_PRODUCTS_BYSHOPID,
    products
  }
}


export function addCount(count) {
  return {
    type: ADD_COUNT,
    count: count
  }
}

export function loadProductById(id){
  return dispatch => {
    // dispatch(exceptProductById(id));
    MClient.sub("get.product.id", id);
    let product = [];
    MClient.connect();
    MClient.method("get.oneproduct.id", id)
                  .then(result => {
                    dispatch(receiveProductById(result));
                  })
                  .catch(error => {
                    dispatch(receiveProductByIdError(error));

                  });
  }
}

export function loadProductList(){

}



export function createOrder(product) {
  return dispatch => {
    MClient.method('app.orders.insert',product)
            .then(result => {
                if(result){
                  history.push(`/firmorder/${result}`)
                }
            })
            .catch(error => {
                console.log(error);
            })
  }
}


export function loadShopProductsByShopId(shopId,page,pagesize) {
  return dispatch => {
    console.log(`加载店铺商品`)
    console.log(shopId)
    MClient.sub('app.get.shop.products',shopId,page,pagesize);
    MClient.connect();
    let products = [];
      MClient.on("added", ({collection, id, fields}) => {
        console.log(`Element added to collection ${collection}`);
        console.log(id);
        console.log(fields);
        if(collection==='products'){
          if(products.length< pagesize){
            products.push({fields,id})
          }
          console.log(products);
          dispatch(receiveShopProductsByShopId(products));
        }
      });
  }
}


export function gainRecommandProducts(page,pagesize,data=[]) {
  return dispatch => {
    console.log(`获取推荐商品`)
    MClient.sub('app.get.recommend.products',page,pagesize);
    MClient.connect();
    let products = [];
    // data = data.slice();
    console.log(data);
    console.log(page);
    MClient.on("added", ({collection, id, fields}) => {
      console.log(fields)
      if(collection==='products'){
        if(products.length< pagesize){
          fields.id = id
          products.push(fields)
        }
        console.log(data.concat(products))
        dispatch(getRecommandProducts(data.concat(products)))
      }
    })
  }
}
