import { GET_PRODUCT_SUCCESS,ADD_PRODUCT_COUNT,CHANGE_SPEC } from '../actions/productAction';
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
	selected: [],
}

export function productReducer(state=initState, action){
    switch (action.type) {
			case  GET_PRODUCT_SUCCESS:
            return  {
                ...state,
                product: action.product,    
				isFetching: false,
				selected: action.selected,
                }
            case ADD_PRODUCT_COUNT:
            return {
                ...state,
                count: action.num,
                isFetching: false,
			}
			case CHANGE_SPEC :
			let index = action.index;
			let selected = state.selected
			console.log(selected);
			for(var i=0;i< selected.length;i++){
			  selected[i].isThis = false;
			  selected[index].isThis = true
			}
			return {
				...state,
				selected,
			}
      default:
				return state
    }
  }