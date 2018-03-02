import { GET_SHOP_PRODUCTS_SUCCESS } from '../actions/shopProductsAction';
const initState = {
    list: [],
    isFetching: true,

}

export function shopProductsReducer(state=initState, action){
    switch (action.type) {
			case  GET_SHOP_PRODUCTS_SUCCESS:
            return  {
                ...state,
                list: action.products,    
                isFetching: false,
                }
      default:
				return state
    }
  }
