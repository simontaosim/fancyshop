import { MClient } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';


const INIT_CART = "INIT_CART";
const ADD_CART = "ADD_CART";
const CUT_CART = "CUT_CART";
const REMOVE_CART = "REMOVE_CART";
const ADD_SHOP = "ADD_SHOP";
const ADD_PRODUCT= "ADD_PRODUCT";
const PRODCUT_CHECK_ALL = "PRODCUT_CHECK_ALL";
const SHOP_CHECK_ALL = "SHOP_CHECK_ALL";
const SINGEL_PRODUCT_CHECK = "SINGEL_PRODUCT_CHECK";
const COUNT_PRODUCT = "COUNT_PRODUCT";
const DELETE_SHOP_CART = "DELETE_SHOP_CART";



const initialState = {
    goods: {
        user_id: '',
        shopsData: [],
     },
    total: 0

}
export function cart(state=initialState,action) {
  switch(action.type){
    case INIT_CART:
      if(action.payload === undefined){
        return state
      }else{
        return Object.assign({},state,{goods: action.payload})
      }
    case ADD_CART:
      return Object.assign({},state,{status: action.payload})
    case ADD_SHOP:
      return Object.assign({},state,{})
    case ADD_PRODUCT:
      return Object.assign({},state,{})
    case CUT_CART:
    case REMOVE_CART:
    case PRODCUT_CHECK_ALL:
      let total1 = ProdcutTotal(action.payload)
      return Object.assign({},state,{goods: action.payload},{total1})
    case SHOP_CHECK_ALL:
      var total2 = ProdcutTotal(action.payload)
      return Object.assign({},state,{goods: action.payload},{total2})
    case SINGEL_PRODUCT_CHECK:
      var total3 = ProdcutTotal(action.payload)
      return Object.assign({},state,{goods: action.payload},{total3})
    case COUNT_PRODUCT:
      var total4 = ProdcutTotal(action.payload)
      return Object.assign({},state,{goods: action.payload},{total4})
    case DELETE_SHOP_CART:
      return Object.assign({},state,{goods: action.payload})
    default:
      return state
  }
}

function addCartSuccess(data) {
  return { type: ADD_CART, payload: data}
}

function initCartSuccess(data) {
  return { type: INIT_CART, payload: data}
}


function deleteCartSuccess(data){
  return { type:DELETE_SHOP_CART, payload: data}
}
//计算选中总价格
function ProdcutTotal(data) {
  let shopsData = data.shopsData;
  var total = 0;
  for(var i=0;i< shopsData.length; i++){
    for(var j=0;j< shopsData[i].productsData.length; j++){
      if(shopsData[i].productsData[j].checked === true){
        total += shopsData[i].productsData[j].prodductSpec.price*1 * shopsData[i].productsData[j].count
      }
    }
  }
  return total;
}

//删除购物车
function deleteShopCart(data) {
    let shopsData = data.shopsData;
    let shopDeletData = shopsData.filter(filterByItem);
    for(var i=0;i<shopDeletData.length;i++){
      shopDeletData[i].productsData =shopDeletData[i].productsData.filter(filterByItem)
    }
    console.log(shopDeletData)
     return shopDeletData
}
//结算购物车

function filterByItem(item) {
  if (isCheck(item.checked)) {
    return true;
  }
  return false;
}

function isCheck(obj) {
  return  obj!== true
}
export function deleteProduct(data){
  return { type: DELETE_SHOP_CART}
}
//添加店铺商品
export function addShop(shop,product) {
  return { type: ADD_SHOP,shop,product}
}

//添加商品
export function addProduct(product) {
  return { type: ADD_PRODUCT, product}
}

//选中店铺所有商品
export function productCheckAll(data) {
  return { type: PRODCUT_CHECK_ALL,payload: data}
}

//选中所有店铺
export function shopCheckAll(data){
  return { type: SHOP_CHECK_ALL, payload: data}
}

//选中单个商品
export function prodoctSingelCheck(data) {
  return { type: SHOP_CHECK_ALL, payload: data}
}

//计算商品数量
export function countProduct(data) {
  return { type: COUNT_PRODUCT, payload: data}
}



//获取购物车
export function getCart(id) {
  return dispatch => {
    let methodId = MClient.method('shop_carts.get_cart',id);
    MClient.on("result", result =>　{
      if (result.id === methodId && !result.error) {
        dispatch(initCartSuccess(result))

      }else{
        console.log(result.error);
      }
    })
  }
}


export function addCart(product) {
  return dispatch => {
      MClient.method('shop_carts.add_cart',product)
              .then(result => {
                  dispatch(addCartSuccess(result))
                  Toast.info('加入购物车成功',1)
              })
              .catch(error => {

              })
  }
}

export function insertCart(product) {
  return dispatch => {
      MClient.method('shop_carts.insert_cart',product)
              .then(result => {
                 dispatch(initCartSuccess(result))
                  Toast.info('加入购物车成功',1)
              })
              .catch(error => {

              })
  }
}


export function removeCart(product) {
  return dispatch => {
    console.log(product)
   console.log(deleteShopCart(product))
    MClient.method('shop_carts.add_cart',deleteShopCart(product))
            .then(result => {
                dispatch(deleteCartSuccess(result))
            })
            .catch(error => {

            })
  }
}
