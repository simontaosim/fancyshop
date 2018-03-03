import history from '../history';
import { MClient } from '../config/asteroid.config.js';


export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILD = "GET_ORDER_FAILD";




function getOrderSuccess(order) {
    return {
       type:  GET_BALANCE_SUCCESS ,
       order
    }
}



export function createOrder(product) {
    return dispatch => {
    let methodId = MClient.method('app.orders.insert',[product])
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





