import {RECEIVEORDERBYID,GET_SINGLE_ORDER} from '../actions/orders.js'

const initState = {
	order: {
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
}


export function order(state=initState, action){
    switch (action.type) {
		case  RECEIVEORDERBYID:
			return Object.assign({},state,{
				order: action.order
			})
			case  GET_SINGLE_ORDER:
			return Object.assign({},state,{
				order: action.order
			})
		default:
			return state
    }
  }

