import { asteroid } from '../config/asteroid.config.js'
import { Toast } from 'antd-mobile';


const INIT_CART = "INIT_CART";
const ADD_CART = "ADD_CART";
const CUT_CART = "CUT_CART";
const REMOVE_CART = "REMOVE_CART";
const ADD_SHOP = "ADD_SHOP";
const ADD_PRODUCT= "ADD_PRODUCT";



const initialState = {
    goods: {
        user_id: '',
        shopsData: []
     }
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


//添加店铺商品
export function addShop(shop,product) {
  return { type: ADD_SHOP,shop,product}
}

//添加商品
export function addProduct(product) {
  return { type: ADD_PRODUCT, product}
}

//获取购物车
export function getCart(id) {
  return dispatch => {
    console.log(`id: ${id}`)
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
    console.log(product);
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


