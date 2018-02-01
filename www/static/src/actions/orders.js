import history from '../history';
import { asteroid } from '../config/asteroid.config.js';
export const RECEIVEORDERBYID = 'RECEIVEORDERBYID';


function reviceOrderById(order) {
    return {
     type: RECEIVEORDERBYID,
     order
    }
}


export function loadOrderById(id) {
  return  dispatch => {
        asteroid.call('app.order.getone',id)
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
      asteroid.call('app.orders.insert',product)
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

