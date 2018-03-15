import { MClient } from '../config/asteroid.config.js';
import { getStore } from '../config/mUtils'


export const GET_BALANCE_SUCCESS = "GET_BALANCE_SUCCESS";
export const GET_BALANCE_FAILD = "GET_BALANCE_FAILD";
export const GET_BALANCE_INCOMES_TOTAL_SUCCESS = "GET_BALANCE_INCOMES_TOTAL_SUCCESS";
export const GET_BALANCE_INCOMES_TOTAL_FAILD = "GET_BALANCE_INCOMES_TOTAL_FAILD";




function getBalanceSuccess(balance) {
    return {
       type:  GET_BALANCE_SUCCESS ,
       balance
    }
}

function getBalanceIncomesTotalSuccess(total) {
    return {
        type:  GET_BALANCE_INCOMES_TOTAL_SUCCESS,
        total
    }
}





export function getBalance(userId) {
  return  dispatch => {
      let token = getStore('stampedToken')
      let methodId  = MClient.method('app.get.current.balance',[userId,token])
      MClient.on('result', message => {
          console.log(message.result)
          if (message.id === methodId && !message.error && message.result.formMethod === 'app.get.current.balance'){
             dispatch(getBalanceSuccess(message.result))
          }
      })
    }
}

export function getBalanceIncomesTotal(userId) {
    return dispatch => {
        let token = getStore('stampedToken')
        let methodId = MClient.method('app.get.balance_incomes.toady.total',[userId,token]);
        MClient.on("result", message => {
            console.log('result');
            console.log(message);
            if (message.id === methodId && !message.error && message.result.formMethod === 'app.get.balance_incomes.toady.total') {
                dispatch(getBalanceIncomesTotalSuccess(message.result));
            }
        });
    }
}
