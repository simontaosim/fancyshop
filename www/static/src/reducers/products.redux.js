import { GET_RECOMMAND_PRODUCTS_SUCCESS,GET_PRODUCTS_SUCCESS } from '../actions/productsAction'
export function recommandProductsReducer(state={
  isFetching: true,
  products: [],
}, action){
  switch (action.type) {
    case GET_RECOMMAND_PRODUCTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            products: action.products
        }
    default:
    return state;
  }
}

export function ProductsReducer(state={
    isFetching: true,
    list: [],
    page: 1,
},action){
    switch (action.type) {
        case GET_RECOMMAND_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.products
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.products,
                page: action.page,
                isFetching: false,
            }
        default:
        return state;
      }
}

   
