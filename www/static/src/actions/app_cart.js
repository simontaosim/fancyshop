export const ADD_PRODUCTS_TO_APP_CART = "ADD_PRODUCTS_TO_APP_CART";
export const SELECT_ALL_PRODUCT = "SELECT_ALL_PRODUCT";
export const DELETE_PRODUCT_FROM_APP_CART = "DELETE_PRODUCT_FROM_APP_CART";
export const SELECT_ALL_PRODUCTS = "SELECT_ALL_PRODUCTS"; 
export const SELECT_ONE_PRODUCT = "SELECT_ONE_PRODUCT";
export const UNSELECT_ONE_PRODUCT = "UNSELECT_ONE_PRODUCT";
export const UNSELECT_ALL_PRODUCT = "UNSELECT_ALL_PRODUCT";
export const RESET_APP_CART = "RESET_APP_CART";
export const SUBMIT_SELECTED_PRODUCTS = "SUBMIT_SELECTED_PRODUCTS";


export function addProductsToAppCart(product, count, shopName){
    return {
        type: ADD_PRODUCTS_TO_APP_CART,
        count,
        shopName
    }
}