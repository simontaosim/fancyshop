import history from '../history';
import { MClient } from '../config/asteroid.config.js';


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
        MClient.sub("app.get.current.balance",[userId]);
        MClient.connect();
        MClient.on("added", ({collection, id, fields}) => {
            if(collection==='balances'){
                let balance = fields
                balance.id = id
                dispatch(getBalanceSuccess(balance))
            }
        });
    }
}

export function getGetBalanceIncomesTotal(userId) {
    return dispatch => {
        let methodId = MClient.method('app.get.balance_incomes.toady.total',userId);
        MClient.on("result", message => {
            if (message.id === methodId && !message.error) {
                dispatch(getBalanceIncomesTotalSuccess(message.total));
            }else{
              console.log(message);
            }
        });
    }
}
