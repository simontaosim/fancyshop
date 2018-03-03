import { GET_RECOMMAND_PRODUCTS_SUCCESS } from '../actions/productsAction'
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
