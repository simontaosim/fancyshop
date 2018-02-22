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
    MClient.method("get.allOrders", userId)
                  .then(result => {
                    console.log("所有订单")
                    console.log(result)
                    dispatch(getAllOrders(result));
                  })
                  .catch(error => {
                    dispatch(getAllOrdersError(error));

                  });
  }
}

export function  gainPaidOrders(userId){
  return dispatch => {
    MClient.sub("get.paidOrders", userId);
    MClient.connect();
    MClient.method("get.paidOrders", userId)
                  .then(result => {
                    console.log("所有支付订单")
                    console.log(result)
                    dispatch(getPaidOrders(result));
                  })
                  .catch(error => {
                    dispatch(getPaidOrdersError(error));

                  });
  }
}

export function  gainUnPaidOrders(userId){
  return dispatch => {
    MClient.sub("get.unpaidOrders", userId);
    MClient.connect();
    MClient.method("get.unpaidOrders", userId)
                  .then(result => {
                    console.log("所有未支付订单")
                    console.log(result)
                    dispatch(getUnPaidOrders(result));
                  })
                  .catch(error => {
                    dispatch(getUnPaidOrdersError(error));
                  });
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
        MClient.method('app.order.getone',id)
                .then(result => {
                    console.log(result);
                    dispatch(reviceOrderById(result))
                })
                .catch(error => {

                })
    }
}



export function createOrder(product) {
    return dispatch => {
      MClient.method('app.orders.insert',product)
              .then(result => {
                  if(result){
                    history.push(`/firmorder${result}`)
                  }
              })
              .catch(error => {
                  console.log(error);
              })
    }
  }


