import { RECEIVEORDERBYID } from '../actions/orders.js'
const initState = {
	"_id" : "",
	"type" : null,
	"userId" : "",
	"status" : "",
	"shopId" : "",
	"products" : [
	],
	"username" : "",
	"address" : null
}


export function order(state=initState, action){
    switch (action.type) {
            case  RECEIVEORDERBYID:
            console.log(`orderid`)
			return Object.assign({},state,{
				...action.order
            })
            break;
      default:
				return state
    }
  }

