import { asteroid } from '../config/asteroid.config.js'


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
    asteroid.subscribe("get.allOrders", userId);
    asteroid.connect();
    asteroid.call("get.allOrders", userId)
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
    asteroid.subscribe("get.paidOrders", userId);
    asteroid.connect();
    asteroid.call("get.paidOrders", userId)
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
    asteroid.subscribe("get.unpaidOrders", userId);
    asteroid.connect();
    asteroid.call("get.unpaidOrders", userId)
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