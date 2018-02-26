import history from '../history';
import { MClient } from '../config/asteroid.config.js';
export const RECEIVEORDERBYID = 'RECEIVEORDERBYID';
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_PAID_ORDERS = "GET_PAID_ORDERS";
export const GET_UNPAID_ORDERS = "GET_UNPAID_ORDERS";

export const GET_ALL_ORDERS_ERROR = "GET_ALL_ORDERS_ERROR";
export const GET_PAID_ORDERS_ERROR = "GET_PAID_ORDERS_ERROR";
export const GET_UNPAID_ORDERS_ERROR = "GET_UNPAID_ORDERS_ERROR";



export function getAllOrders(orders){
  return {
    type: GET_ALL_ORDERS,
    orders
  }
}
export function getAllOrdersError(error){
  return {
    type: GET_ALL_ORDERS_ERROR,
    error
  }
}
export function getPaidOrders(orders){
  return {
    type: GET_PAID_ORDERS,
    orders
  }
}
export function getPaidOrdersError(error){
  return {
    type: GET_PAID_ORDERS_ERROR,
    error
  }
}
export function getUnPaidOrders(orders){
  return {
    type: GET_UNPAID_ORDERS,
    orders
  }
}
export function getUnPaidOrdersError(error){
  return {
    type: GET_UNPAID_ORDERS_ERROR,
    error
  }
}
export function  gainAllOrders(userId){
  return dispatch => {
    MClient.sub("get.allOrders", userId);
    MClient.connect();
    let methodId =  MClient.method("get.allOrders", userId);

    MClient.on("result", message=>{
      if(message.id===methodId && !message.error){
        console.log("所有订单")
        console.log(message.result)
        dispatch(getAllOrders(message.result));
      }else{
        dispatch(getAllOrdersError(message.error));
      }
    })
  }
}

export function  gainPaidOrders(userId){
  return dispatch => {
    MClient.sub("get.paidOrders", userId);
    MClient.connect();
    let methodId = MClient.method("get.paidOrders", userId);
               
    MClient.on("result", message=>{
      if(message.id === methodId && !message.error){
        console.log("所有支付订单")
        console.log(message.result)
        dispatch(getUnPaidOrders(message.result));
      }else{
        dispatch(getUnPaidOrdersError(message.error));
      }
    })
  }
}

export function  gainUnPaidOrders(userId){
  return dispatch => {
    MClient.sub("get.unpaidOrders", userId);
    MClient.connect();
    let methodId = MClient.method("get.unpaidOrders", userId);
    
    MClient.on("result", message=>{
      if(message.id === methodId && !message.error){
        console.log("所有未支付订单")
        console.log(message.result)
        dispatch(getUnPaidOrders(message.result));
      }else{
        dispatch(getUnPaidOrdersError(message.error));
      }
    })
  }

}



function reviceOrderById(order) {
    return {
     type: RECEIVEORDERBYID,
     order
    }
}


export function loadOrderById(id) {
  return  dispatch => {
      let methodId =  MClient.method('app.order.getone',id);
      
      MClient.on('result', message => {
        if(message.id === methodId && !message.error){
          console.log(message.result);
          dispatch(reviceOrderById(message.result))
        }else{
          console.error(message.error);
        }
      })
    }
}



export function createOrder(product) {
    return dispatch => {
    let methodId = MClient.method('app.orders.insert',product)
    MClient.on('result', message=>{
      if(message.id === methodId && !message.error){
        if(message.result){
          history.push(`/firmorder${message.result}`)
        }else{
          console.log(message.error);
        }
      }
    })
    }
  }


