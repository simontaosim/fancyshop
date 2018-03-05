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
			return Object.assign({},state,{
				...action.order
			})
		default:
			return state
    }
  }

