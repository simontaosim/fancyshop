import { MClient } from '../config/asteroid.config.js';


export const GET_BALANCE = "GET_BALANCE";
export const GET_BALANCE_INCOMES_TOTAL = "GET_BALANCE_INCOMES_TOTAL";



function getBlance(balance) {
    return {
       type: GET_BALANCE,
       balance
    }
}

function getBalanceIncomesTotal(total) {
    return {
        type:  GET_BALANCE_INCOMES_TOTAL,
        total
    }
}





export function gainBlance(userId) {
  return  dispatch => {
        MClient.sub("app.get.current.balance",[userId]);
        MClient.connect();
        MClient.on("added", ({collection, id, fields}) => {
            if(collection==='balances'){
                let balance = fields
                balance.id = id
                dispatch(getBlance(balance))
            }
        });
    }
}

export function gainGetBalanceIncomesTotal(userId) {
    return dispatch => {
        let methodId = MClient.method('app.get.balance_incomes.toady.total',userId);
        MClient.on("result", message => {
            if (message.id === methodId && !message.error) {
                dispatch(getBalanceIncomesTotal(message.total));
            }else{
              console.log(message);
            }
        });
    }
}
