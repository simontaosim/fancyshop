import { GET_PRODUCT_SUCCESS,ADD_PRODUCT_COUNT} from '../actions/productAction';
const initState = {
    product: {
        images: [],
        specifications: [],
    },
    isFetching: true,
	deliver: "自提",
	address: "四川 成都",
	inventory: 39,
	sales: 74,
	count: 1,
	page: 1,
}

export function productReducer(state=initState, action){
    switch (action.type) {
			case  GET_PRODUCT_SUCCESS:
            return  {
                ...state,
                product: action.product,    
                isFetching: false,
                }
            case ADD_PRODUCT_COUNT:
            return {
                ...state,
                count: action.num,
                isFetching: false,
            }
            // Object.assign({},state,{
			// 	product: action.product
			// })
			// case ADD_COUNT:
			// return Object.assign({},state,{ 
			// 	count: action.count
			// 	})
			// break;
			// case RECEIVE_SHOP_PRODUCTS_BYSHOPID:
			// return Object.assign({},state,{
			// 	shopProducts: action.products
			// })
			// case GET_RECOMMAND_PRODUCTS:
			// return Object.assign({},state,{
			// 	products: action.products,
			// 	page: action.page
			// })
			// break;
      default:
				return state
    }
  }