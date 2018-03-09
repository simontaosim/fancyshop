import { INSERT_CART_SUCCESS,GET_CART_SUCCESS,PRODCUT_CHECK_ALL,COUNT_PRODUCT,SHOP_CHECK_ALL,REMOVE_CART_SUCCESS } from '../actions/cartAction';

export function cartReducer(state={
    list: {
        shopsData: [],
        user_id: '',
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
    }
   
    // case INIT_CART:
    //   if(action.payload === undefined){
    //     return state
    //   }else{
    //     return Object.assign({},state,{goods: action.payload})
    //   }
    // case ADD_CART:
    //   return Object.assign({},state,{status: action.payload})
    // case ADD_SHOP:
    //   return Object.assign({},state,{})
    // case ADD_PRODUCT:
    //   return Object.assign({},state,{})
    // case CUT_CART:
    // case REMOVE_CART:
    // case PRODCUT_CHECK_ALL:
    //   let total1 = ProdcutTotal(action.payload)
    //   return Object.assign({},state,{goods: action.payload},{total1})
    // case SHOP_CHECK_ALL:
    //   var total2 = ProdcutTotal(action.payload)
    //   return Object.assign({},state,{goods: action.payload},{total2})
    // case SINGEL_PRODUCT_CHECK:
    //   var total3 = ProdcutTotal(action.payload)
    //   return Object.assign({},state,{goods: action.payload},{total3})
    // case COUNT_PRODUCT:
    //   var total4 = ProdcutTotal(action.payload)
    //   return Object.assign({},state,{goods: action.payload},{total4})
    // case DELETE_SHOP_CART:
    //   return Object.assign({},state,{goods: action.payload})
    default:
      return state
  }
}

