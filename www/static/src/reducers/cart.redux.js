import { asteroid } from '../config/asteroid.config.js'
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
    if(action.payload == undefined){
      return state
    }else{
    return Object.assign({},state,{goods: action.payload})
    }
      break;
    case ADD_CART:
    return Object.assign({},state,{status: action.payload})
      break;
    case ADD_SHOP:
    return Object.assign({},state,{})
      break;
    case ADD_PRODUCT:
    return Object.assign({},state,{})
      break;
    case CUT_CART:
      break;
    case REMOVE_CART:
      break;
    case PRODCUT_CHECK_ALL:
    var total = ProdcutTotal(action.payload)
    return Object.assign({},state,{goods: action.payload},{total})
      break;
    case SHOP_CHECK_ALL:
    var total = ProdcutTotal(action.payload)
    return Object.assign({},state,{goods: action.payload},{total})
      break;
    case SINGEL_PRODUCT_CHECK:
    var total = ProdcutTotal(action.payload)
    return Object.assign({},state,{goods: action.payload},{total})
      break;
    case COUNT_PRODUCT:
    var total = ProdcutTotal(action.payload)
    return Object.assign({},state,{goods: action.payload},{total})
      break;
    case DELETE_SHOP_CART:
    return Object.assign({},state,{goods: action.payload})
      break;
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
//计算选中总价格
function ProdcutTotal(data) {
  let shopsData = data.shopsData;
  console.log(data)
  var total = 0;
  for(var i=0;i< shopsData.length; i++){
    for(var j=0;j< shopsData[i].productsData.length; j++){
      if(shopsData[i].productsData[j].checked == true){
        total += shopsData[i].productsData[j].prodductSpec.price*1 * shopsData[i].productsData[j].count
      }
    }
  }
  return total;
}

//删除购物车 
function deleteShopCart(data) {
    let shopsData = data.shopsData;
    console.log(shopsData.length)
    // var total = 0;
    for(var i=0;i< shopsData.length; i++){
      if(shopsData[i].checked == true){
        //  shopsData.splice(i,1)
        console.log(111);
          shopsData.splice(i,1)
      }
      // else{
      //   for(var j=0;j< shopsData[i].productsData.length; j++){
      //     if(shopsData[i].productsData[j].checked == true){
      //       shopsData[i].productsData.splice(j,1)
      //     }
      //   }
      // }
    
    }
    return data
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
      asteroid.call('shop_carts.get_cart',id)
              .then(result => {
                console.log(result);
                 dispatch(initCartSuccess(result))
              })
              .catch(error => {
                  console.log(error);
              })
  }
}


export function addCart(product) {
  return dispatch => {
      asteroid.call('shop_carts.add_cart',product)
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
      asteroid.call('shop_carts.insert_cart',product)
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
    // asteroid.call('')
  }
}


