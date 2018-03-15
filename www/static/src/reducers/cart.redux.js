import { INSERT_CART_SUCCESS,GET_CART_SUCCESS,PRODCUT_CHECK_ALL,COUNT_PRODUCT,SHOP_CHECK_ALL,REMOVE_CART_SUCCESS } from '../actions/cartAction';

export function cartReducer(state={
    list: {
        shopsData: [],
        userId: '',
    },
    total: 0,
    isFetching: true,
},action) {
  switch(action.type){
    case INSERT_CART_SUCCESS:
    return {
        ...state,
        list: action.payload,
    }
    case GET_CART_SUCCESS:
    if (action.payload === undefined){
        return {
            ...state,
        }
    }
    return {
        ...state,
        list: action.payload,
        isFetching: false
    }
    case PRODCUT_CHECK_ALL:
    return {
      ...state,
      list: action.payload,
      total: action.total
    }
    case COUNT_PRODUCT:
    return {
        ...state,
        list: action.payload,
        total: action.total
    }
    case SHOP_CHECK_ALL:
    return {
        ...state,
        list: action.payload,
        total: action.total
    }
    case REMOVE_CART_SUCCESS:
    return {
        ...state,
        list: action.payload,
        isFetching: false
    }
    default:
      return state
  }
}

