import { ADD_PRODUCTS_TO_APP_CART } from "../actions/app_cart";

// EDIT BY SIMON
export default function AppCart
(
    state={
        count: 0,
        products: [],
        shops:[],
        status: "all-unselected",
        newComing: "false",
        totalAmount: 0,
    }
)
{

    switch (action.type) {
        case ADD_PRODUCTS_TO_APP_CART:
            let shopId = action.product.shopId;
            let productId = action.product._id;
            let products = state.products;
            let shops = state.shops;
            let shop = {};
            if(products === []){
                shop.productIndex = [0];
            }
            if(shops ===[]){
                shop.id = shopId;
            }
           
            return Object.assign({}, state, {
                count,
                products,
                newComing: "true"
            })
    
        default:
            break;
    }


}