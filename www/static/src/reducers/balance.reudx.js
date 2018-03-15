
import { GET_BALANCE_SUCCESS ,GET_BALANCE_INCOMES_TOTAL_SUCCESS } from '../actions/balanceAction';

export function balanceReducer(state={
    isLoadMore: false,
    isFetching: true,
    list: [],
    total: {
        todayTotal: 0,
        weekTotal: 0,
        monthTotal: 0,
    }
},action){
    switch(action.type) {
        case GET_BALANCE_SUCCESS:
            return  {
                        ...state,
                        isFetching: false,
                        list: action.balance,
                    }
        case GET_BALANCE_INCOMES_TOTAL_SUCCESS:
            return {
                    ...state,
                    isFetching: false,
                    total: action.total.total,
                    }
        default:
            return state
    }
}